import * as dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config({ path: resolve(__dirname, '../../.env') });

export default function getEnv(key: string) {
	if (!process.env[key]) {
		throw new Error(`No environment variable found for ${key}`);
	}
	return process.env[key];
}
