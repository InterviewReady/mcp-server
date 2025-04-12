import { env } from './env.js';

export const InterviewReadyUrls = {
    BASE_URL: env.BASE_URL,
    API_URL: `${env.API_URL}/api`,
    BLOG_API_URL: `${env.BASE_URL}/_nuxt/content/db-96806b65.json`,
    COURSES_API_URL: `${env.API_URL}/v1/courses`,
    RESOURCE_API_URL: `${env.API_URL}/utilities/resources/all`
}; 