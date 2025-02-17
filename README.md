# MCP Server Playground

[![smithery badge](https://smithery.ai/badge/mcp-server-playground)](https://smithery.ai/server/mcp-server-playground)

This repository is a playground for experimenting with an MCP Server built with TypeScript. It is a personalized version of the tutorial and video on building an MCP Server, and it is intended both as a learning resource and a platform to test integrations with Calude Desktop and Cursor IDE.

## Background

This project is based on the material from:
- [Build your first MCP Server with TypeScript in Under 10 Minutes](https://hackteam.io/blog/build-your-first-mcp-server-with-typescript-in-under-10-minutes/)
- [MCP Server Tutorial Video](https://www.youtube.com/watch?v=8m-O_KiHRjk)

The original tutorial provided a foundation which I have extended. Alongside the examples from the tutorial, I plan to add additional tools and functionalities to evolve this code into a robust playground for MCP Server experiments.

## Features

- **TypeScript-based server:** Leveraging TypeScript for better structure and error-checking.
- **Modular design:** Easy to extend with new commands, features, and integrations.
- **Integration-ready:** Designed to work with Calude Desktop and Cursor IDE for an improved development experience.
- **Expandable playground:** A sandbox environment to experiment with additional tools and modifications beyond the tutorial examples.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (or Yarn, based on your preference)
- TypeScript (if not installed globally)

### Installing via Smithery

To install MCP Server Playground for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@psaboia/mcp-server-playground):

```bash
npx -y @smithery/cli install mcp-server-playground --client claude
```

### Installation

1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd mcp-server-playground
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```


### Configuration

This project uses environment variables. Create a `.env` file to set your configuration options. If an example file (`.env.example`) is provided in the future, use it as a template.

## Development

- **IDE Integration:**
   - Designed to work smoothly with Cursor IDE and Calude Desktop.
   - Leverage the built-in tools and extensions supported by these IDEs to maximize productivity.
- **Extending the Project:**
   - Feel free to add new commands, integrations, or modify existing functionalities.
   - The modular structure of the server makes it easy to plug in additional tools and features.

## Project Structure

```
mcp-server-playground/
├── src/                # Source code directory
│   └── index.ts       # Main server implementation
├── build/             # Compiled JavaScript files
├── package.json       # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── README.md         # Project documentation
```

## Available Scripts

- `npm run build` - Compiles TypeScript code and sets proper permissions
- `npm run prepare` - Runs build script (useful for git hooks)
- `npm run watch` - Watches for changes in TypeScript files
- `npm run inspector` - Runs the MCP inspector tool

## Contributing

Contributions are welcome! If you have suggestions, improvements, or new integrations, please fork the repository and create a pull request with your changes.

## References

- [Build your first MCP Server with TypeScript in Under 10 Minutes](https://hackteam.io/blog/build-your-first-mcp-server-with-typescript-in-under-10-minutes/)
- [MCP Server Tutorial Video](https://www.youtube.com/watch?v=8m-O_KiHRjk)
- [Model Context Protocol SDK Documentation](https://www.npmjs.com/package/@modelcontextprotocol/sdk)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Notes

This project is a sandbox environment aimed at testing various adaptations and integrations for an MCP Server. Updates and expansions will be made as new tools and ideas are developed.

## Roadmap

- [ ] Implement additional tool integrations beyond the tutorial examples
- [ ] Add comprehensive documentation for each tool
- [ ] Create example integrations with Calude Desktop
- [ ] Develop custom tools for Cursor IDE integration
- [ ] Add testing framework and examples
