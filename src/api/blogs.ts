import { BlogResponse, ReducedItemData } from "../types/api/blogs.js";
import { InterviewReadyUrls } from "../config/urls.js";

export class BlogPosts {
    private static cachedResponse: ReducedItemData[] | null = null;

    static async getAllBlogPosts() {
        if (this.cachedResponse) {
            return this.cachedResponse;
        }

        const response = await fetch(InterviewReadyUrls.BLOG_API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch blog posts");
        }

        const data: BlogResponse = await response.json();
        const blogData = data._collections[0]._data;
        const reducedBlogData: ReducedItemData[] = blogData.map((post) => ({
            slug: post.slug,
            title: post.title,
            keywords: post.keywords || post.Keywords,
            bodyPlainText: post.bodyPlainText,
            url: `${InterviewReadyUrls.BASE_URL}${post.path}`
        }));

        this.cachedResponse = reducedBlogData;
        return reducedBlogData;
    }

    static async getBlogPostBySlug(slug: string) {
        const blogPosts = await this.getAllBlogPosts();
        return blogPosts.find((post) => post.slug === slug);
    }

    static async getBlogPostByKeywords(keyword: string) {
        const blogPosts = await this.getAllBlogPosts();
        return blogPosts.filter((post) => post.keywords?.includes(keyword));
    }

    static async getBlogPostByTitle(title: string) {
        const blogPosts = await this.getAllBlogPosts();
        return blogPosts.find((post) => post.title === title);
    }
}

