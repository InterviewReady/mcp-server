import { InterviewReadyUrls } from "../config/urls.js";
import { Resource } from "../types/api/resource.js";

export async function getResources(): Promise<Resource[]> {
    const response = await fetch(InterviewReadyUrls.RESOURCE_API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch resources");
    }

    const data = await response.json();
    return data;
}

