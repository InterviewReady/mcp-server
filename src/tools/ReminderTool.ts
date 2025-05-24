import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { createReminder, getReminders } from "../api/reminder.js";
import { withError } from "../middleware/withError.js";

export class ReminderTool {
    constructor(private readonly server: McpServer) {
        this.server = server;
        this.registerTool();
    }

    private registerTool() {
        this.server.tool(
            "create-reminder",
            "Set a reminder for an upcoming class or deadline",
            {
                title: z.string().describe("Title of the reminder"),
                datetime: z.string().describe("ISO datetime for the reminder"),
                description: z.string().optional().describe("Description"),
            },
            withError(async ({ title, datetime, description }) => {
                const reminder = await createReminder(title, datetime, description);
                return {
                    content: [
                        { type: "text" as const, text: JSON.stringify(reminder) }
                    ]
                };
            })
        );

        this.server.tool(
            "get-reminders",
            "Get all reminders",
            {},
            withError(async () => {
                const reminders = await getReminders();
                return {
                    content: [
                        { type: "text" as const, text: JSON.stringify(reminders) }
                    ]
                };
            })
        );
    }
}