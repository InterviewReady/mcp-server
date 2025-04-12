# mcp-server
An MCP server for InterviewReady.

1. GET ACTIONS: Exposes APIs to fetch the most relevant content from InterviewReady including blogs, resources and course materials.
2. UPDATE ACTIONS: Allows adding notes to a user's notepad, and setting google reminders for future classes. 

Please feel free to add / change capabilities of this repo. 

If you have doubts, please post them in discussions. If there are any problems/issues, please create an issue.

Please self-review any PR before making a contribution.

The repo is open for change!


## Setup and run the server

1. Clone the repo
2. Run `pnpm install`
3. Run `pnpm run build`

## Setup with Claude Desktop

1. Edit the config file for claude desktop `claude_desktop_config.json`
2. Add the following to the config file:

```json
{
    "interviewready-mcp-server": {
            "command": "node",
            "args": [
                "{path-to-repo}/mcp-server/build/index.js"
            ]
        }
} 
```


## Setup with Cursor

1. Go to Cursor > Settings > Cursor Settings
2. Go to the `MCP` tab
3. Add the following to the config file:

```json
{
    "interviewready-mcp-server": {
            "command": "node",
            "args": [
                "{path-to-repo}/mcp-server/build/index.js"
            ]
        }
} 
```
4. Use in agent mode. For some reason, MCP is not working in Ask mode.