import getEnv from './getEnv';

// create consts for environment variables
export const OPENAI_APIKEY = getEnv('OPENAI_APIKEY');
export const ELEVENLABS_APIKEY = getEnv('ELEVENLABS_APIKEY');
export const D_ID_APIKEY = getEnv('D_ID_APIKEY');

// union types
export type StringOrNumber = string | number;

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
	WORDS = '📝',
	SHUTDOWN = '🛑',
	STARTUP = '🟢',
	SKULL = '💀',
	SKULL_AND_CROSSBONES = '☠️',
	ROBOT = '🤖',
	SIREN = '🚨',
}

export enum Util {
	LINE_BREAK = '\n----------------------------------------\n',
}

// ascii art website: https://fsymbols.com/generators/carty/
export enum AsciiArt {
	// ASCII art for the Balenciaganizer logo
	BALENCIGANIZER_LOGO = `
██████╗░░█████╗░██╗░░░░░███████╗███╗░░██╗░█████╗░██╗░█████╗░░██████╗░░█████╗░███╗░░██╗██╗███████╗███████╗██████╗░
██╔══██╗██╔══██╗██║░░░░░██╔════╝████╗░██║██╔══██╗██║██╔══██╗██╔════╝░██╔══██╗████╗░██║██║╚════██║██╔════╝██╔══██╗
██████╦╝███████║██║░░░░░█████╗░░██╔██╗██║██║░░╚═╝██║███████║██║░░██╗░███████║██╔██╗██║██║░░███╔═╝█████╗░░██████╔╝
██╔══██╗██╔══██║██║░░░░░██╔══╝░░██║╚████║██║░░██╗██║██╔══██║██║░░╚██╗██╔══██║██║╚████║██║██╔══╝░░██╔══╝░░██╔══██╗
██████╦╝██║░░██║███████╗███████╗██║░╚███║╚█████╔╝██║██║░░██║╚██████╔╝██║░░██║██║░╚███║██║███████╗███████╗██║░░██║
╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝░╚════╝░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚══════╝╚═╝░░╚═╝`,
}

export enum Links {
	// links to the Balenciaganizer GitHub repo
	GITHUB_REPO = 'https://github.com/elendil7/Balenciaganizer',
}
