import OpenAIEngine from './core/OpenAIEngine';

export default class BalenciaganizerEngine {
	private OpenAIEngine: OpenAIEngine;

	constructor() {
		// create new instance of OpenAIEngine
		this.OpenAIEngine = new OpenAIEngine();
	}

	public run() {
		let quotes: string;

		// prompt for user input (media name to generate character quotes for)
		// use readline to get user input
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		// get input from user
		readline.question('Enter media name: ', async (mediaName: string) => {
			// run OpenAIEngine's getChatCompletionResponse method
			// @ts-ignore
			quotes = await this.OpenAIEngine.generateChatCompletionResponse(
				mediaName
			);

			// close readline
			readline.close();
		});
	}
}
