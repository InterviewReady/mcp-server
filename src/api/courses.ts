import { InterviewReadyUrls } from "../config/urls.js"
import { CourseResponse, CoursesWithStatsResponse } from "../types/api/courses.js"

export async function getCourses(): Promise<CourseResponse[]> {
    const API = InterviewReadyUrls.COURSES_API_URL
    const response = await fetch(API)
    if (!response.ok) {
        throw new Error("Failed to fetch courses")
    }

    const data: CoursesWithStatsResponse = await response.json()
    const courses = data.courses
    return courses
}

export async function getCourseById(courseId: number): Promise<CourseResponse> {
    const response = await fetch(`${InterviewReadyUrls.COURSES_API_URL}/${courseId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch course with id: ${courseId}`);
    }
    const data = await response.json();
    return data;
}