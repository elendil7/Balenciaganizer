import OpenAIEngine from './core/OpenAIEngine';
import { AsciiArt, Emoji } from './util/constants';

export default class BalenciaganizerEngine {
	private OpenAIEngine: OpenAIEngine;

	constructor() {
		// create new instance of OpenAIEngine
		this.OpenAIEngine = new OpenAIEngine();
	}

	public async run() {
		console.log(`\n\n${AsciiArt.BALENCIGANIZER_LOGO}`);

		console.log("\n\nWelcome to Balenciaganizer! Let's get started!");

		while (true) {
			// run OpenAIEngine's getChatCompletionResponse method to attain quotes
			const quotes =
				await this.OpenAIEngine.generateChatCompletionResponse(
					'',
					true
				);

			// log quotes
			console.log(`\n${Emoji.FAST_FORWARD} Here are the quotes:`, quotes);
		}
	}
}
