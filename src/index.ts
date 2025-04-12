import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CoursesTool } from "./tools/CourseTool.js";
import { BlogTool } from "./tools/BlogTool.js";
import { ResourceTool } from "./tools/ResourceTool.js";

const server = new McpServer({
  name: "interviewready",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

new CoursesTool(server)
new BlogTool(server)
new ResourceTool(server)

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("InterviewReady MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});