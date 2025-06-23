export interface Reminder {
    id: string;
    title: string;
    description?: string;
    datetime: string; // ISO string
    createdAt: string;
    updatedAt: string;
    calendarEventUrl?: string; // For Google Calendar integration
}