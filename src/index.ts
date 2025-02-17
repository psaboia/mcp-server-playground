#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";

async function main() {
  const server = new Server({
    name: "mcp-server-playground",
    version: "1.0.0",
  }, {
    capabilities: {
      tools: {}
    }
  });

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [{
        name: "calculate_sum",
        description: "Add two numbers together",
        inputSchema: {
          type: "object",
          properties: {
            a: { type: "number" },
            b: { type: "number" }
          },
          required: ["a", "b"]
        }
      },
      {
        name: "httpbin_json",
        description: "Returns data about slide show ",
        inputSchema: {
          type: "object",
          properties: {
            a: { type: "number" },
          },
          required: []
        }
      }
      ]
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "calculate_sum") {
      const args = request.params.arguments as { a: number; b: number };
      if (typeof args?.a !== 'number' || typeof args?.b !== 'number') {
        throw new McpError(ErrorCode.InvalidRequest, "Arguments 'a' and 'b' must be numbers");
      }
      return { toolResult: args.a + args.b};
    }
    if (request.params.name === "httpbin_json") {
        try {
          const response = await fetch('https://httpbin.org/json', {
            method: 'GET',
            headers: {
              'accept': 'application/json'
            }
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          return { toolResult: data };

        } catch (error) {
          throw new Error("Something went wrong");

        }
      
      
    }

    throw new McpError(ErrorCode.MethodNotFound, "Tool not found");
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});