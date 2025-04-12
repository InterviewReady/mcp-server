import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
} as const;

const requiredEnvVars: (keyof typeof env)[] = ['BASE_URL', 'API_URL'];

for (const envVar of requiredEnvVars) {
    if (!env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
}