import getEnv from './getEnv';

// create consts for environment variables
export const OPENAI_API_KEY = getEnv('OPENAI_API_KEY');

// create enum for emoji symbols (hammer, checkmark, failure, etc.)
export enum Emoji {
	HAMMER_TOOL = '🔨',
	HAMMER_AND_WRENCH_TOOL = '🛠️',
	CHECKMARK = '✅',
	FAILURE = '❌',
	WARNING = '⚠️',
	INFO = 'ℹ️',
	QUESTION = '❓',
	EXCLAMATION = '❗',
	FAST_FORWARD = '⏩',
	REWIND = '⏪',
	RAT = '🐀',
	HOURGLASS = '⏳',
	NUMBER = '🔢',
	SHUTDOWN = '🛑',
}

export enum Util {
	LINE_BREAK = '\n----------------------------------------\n',
}
