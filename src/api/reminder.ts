import { Reminder } from "../types/api/reminder.js";
import { randomUUID } from "crypto";

const reminders: Reminder[] = [];

export async function createReminder(
    title: string,
    datetime: string,
    description?: string
): Promise<Reminder> {
    const now = new Date().toISOString();
    const reminder: Reminder = {
        id: randomUUID(),
        title,
        description,
        datetime,
        createdAt: now,
        updatedAt: now,
    };
    reminders.push(reminder);
    return reminder;
}

export async function getReminders(): Promise<Reminder[]> {
    return reminders;
}