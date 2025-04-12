import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getResources } from "../api/resource.js";
import { withError } from "../middleware/withError.js";
export class ResourceTool {
    constructor(private readonly server: McpServer) {
        this.server = server;
        this.registerTool();
    }

    private registerTool() {
        this.server.tool(
            "get-resources",
            "Get all external resources recommended by interviewready platform",
            {},
            withError(async () => this.getResources()),
        );
    }

    private async getResources() {
        const resources = await getResources();
        const content = resources.map(resource => ({ type: "text" as const, text: JSON.stringify(resource) }));
        return { content: content };
    }
}