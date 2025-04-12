export interface PlatformStats {
    total_enrolled_users: number;
    total_videos_watched: number;
    total_sdoj_submission: number;
}

export interface Instructor {
    id: number;
    course_id: number;
    name: string;
    description: string;
    image_url: string;
    experience: string;
    social_links: string[];
    created: number;
    updated: number;
}

export interface CoursePlan {
    id: number;
    course_id: number;
    course_plan_name: string;
    validity: number;
    zoom_sessions: boolean;
    price_inr: number;
    price_usd: number;
    active: boolean;
    created: number;
    updated: number;
}

export interface Course {
    id: number;
    name: string;
    slug: string;
    description: string;
    keywords: string;
    updated: number;
    created: number;
    video_id: number;
    course_rating: number;
    thumbnail_url: string;

    num_of_videos: number;
    num_of_quizzes: number;
    num_of_downloadable_resources: number;
    num_of_ratings: number;
    num_of_enrolled_users: number;
    num_of_discussions: number;

    instructors: Instructor[];
    course_plans: CoursePlan[];

    playback_url: string;
    tags: string[];
    last_updated: number;
}

export interface CoursesWithStatsResponse {
    platform_stats: PlatformStats;
    courses: Course[];
}

export type CourseResponse = Course;

export interface CreateCourseRequest extends Omit<Course, 'id' | 'created' | 'updated' | 'last_updated'> {
}

export interface UpdateCourseRequest extends Partial<CreateCourseRequest> {
}
