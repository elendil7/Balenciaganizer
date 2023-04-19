import { OpenAIApi } from 'openai';
import AuthorizeUser from '../api/openai/v1/controllers/AuthorizeUser';
import GenerateCharacterQuotes from '../api/openai/v1/controllers/GenerateCharacterQuotes';

export default class OpenAIEngine {
	private openai: OpenAIApi;

	constructor() {
		// authorize user (create instance of OpenAIApi (for sending requests & getting response from OpenAI chatgpt))
		const openAIAPI = AuthorizeUser();
		if (openAIAPI) this.openai = openAIAPI;
		else throw new Error('Could not authorize user');
	}

	// getters
	public getOpenAI() {
		return this.openai;
	}

	// ! TODO - make separate method for getting user input (use polymorphism & previous project for reference).
	// ! TODO - call the getUserInput method inside the GenerateCharacterQuotes method in the /controllers directory, or in this file (OpenAIEngine.ts) in the generateChatCompletionResponse method (TBD)

	public async generateChatCompletionResponse(mediaName: string) {
		// log message
		console.log(
			'Generating character quotes... for media name: ',
			mediaName
		);

		const quotes = await GenerateCharacterQuotes(
			this.getOpenAI(),
			mediaName
		);

		if (!quotes || !quotes.content) {
			console.log('Quotes generation failed. Retrying...');
			this.generateChatCompletionResponse(mediaName);
		} else {
			console.log('Quotes generation successful!');
			return quotes.content;
		}

		if (quotes) {
			// if invalidMediaName, then reattempt
			if (
				quotes.content
					.replace(/\s/g, '')
					.toLowerCase()
					.includes('invalidmedia')
			) {
				console.log('Invalid media name. Reattempting...\n\n');
				this.generateChatCompletionResponse(mediaName);
			} else {
				console.log("Generation complete! Here's what we got: ");

				// parse JSON object
				const data = JSON.parse(quotes.content);
				console.log(data);
			}
		} else {
			console.log('Generation failed. Reattempting...\n\n');
			this.generateChatCompletionResponse(mediaName);
		}
	}
}
