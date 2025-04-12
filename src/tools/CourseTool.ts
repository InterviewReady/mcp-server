import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getCourseById, getCourses } from "../api/courses.js";
import { z } from "zod";
import { withError } from "../middleware/withError.js";
export class CoursesTool {
    constructor(private readonly server: McpServer) {
        this.server = server;
        this.registerTool();
    }

    private registerTool() {
        this.server.tool(
            "get-courses",
            "Get all courses on interviewready platform",
            {},
            withError(async () => this.getCourses()),
        );

        this.server.tool(
            "get-course-by-id",
            "Get a course by id",
            {
                courseId: z.number().describe("The id of the course to get"),
            },
            withError(async ({ courseId }) => this.getCourseById(courseId)),
        );
    }

    async getCourses() {
        const courses = await getCourses();
        const relevantData = courses.map((course) => ({
            id: course.id,
            name: course.name,
            description: course.description,
            thumbnail_url: course.thumbnail_url,
        }));

        return {
            content: [
                {
                    type: "text" as const,
                    text: JSON.stringify(relevantData),
                },
            ],
        };
    }

    async getCourseById(courseId: number) {
        const course = await getCourseById(courseId);

        return {
            content: [
                {
                    type: "text" as const,
                    text: JSON.stringify(course),
                },
            ],
        };
    }
}
