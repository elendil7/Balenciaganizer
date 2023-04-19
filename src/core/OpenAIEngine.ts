import { OpenAIApi } from 'openai';
import AuthorizeUser from '../api/openai/v1/controllers/AuthorizeUser';
import GenerateCharacterQuotes from '../api/openai/v1/controllers/GenerateCharacterQuotes';
import { Emoji, Links } from '../util/constants';
import UserInputReader from '../util/UserInputReader';

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

	public async generateChatCompletionResponse(
		mediaName: string,
		repromptUser: boolean
	): Promise<any> {
		// if mediaName is empty (or invalid (this function is called recursively)), then prompt user for a valid media name
		if (repromptUser) {
			// create new instance of UserInputReader
			const userInputReader = new UserInputReader();

			// get mediaName input from user
			mediaName = await userInputReader.askForStringInput(
				`\n${Emoji.WORDS} Enter the name of a movie/show/book: `,
				2,
				50
			);

			// close the readline interface
			userInputReader.close();
		}

		// log message
		console.log(
			`${Emoji.HOURGLASS} Generating character quotes for media name: "${mediaName}"`
		);

		// get quotes using the media name given by the user
		const quotes = await GenerateCharacterQuotes(
			this.getOpenAI(),
			mediaName
		);

		// if quotes is null, then reattempt (chatgpt API error handling - failed to return quotes)
		if (!quotes || !quotes.content) {
			console.log(
				`${Emoji.FAILURE} Quotes generation failed. Retrying... ${Emoji.HOURGLASS}`
			);
			return this.generateChatCompletionResponse(mediaName, false);
		}

		// get quotes.content as a string and sanitize it (remove all whitespace and convert to lowercase)
		const quotesContent = quotes.content.replace(/\s/g, '').toLowerCase();

		// if chatgpt returns the hashcode relating to ALL other unexpected errors, prompt user to report issue, and reattempt
		if (quotesContent.includes('3b8f57abeb293cbe2c5b67ca554e79933')) {
			console.error(
				`${Emoji.SIREN} Unexpected error - this shouldn't happen! Please raise an issue on the GitHub page: "${Links.GITHUB_REPO}/issues" ${Emoji.SKULL_AND_CROSSBONES}`
			);
		}
		// if chatgpt returns the hashcode relating to invalid media name, then reprompt the user for a valid media name
		else if (quotesContent.includes('c5b67ca554e79933b8f57abeb293cbe2')) {
			// reprompt the user for a valid media name, by rerunning this very method
			console.error(
				`${Emoji.FAILURE} Invalid media name. Please try again.`
			);
			return this.generateChatCompletionResponse(mediaName, true);
		}
		// else return the quotes (all checks passed)
		else {
			console.log(`${Emoji.CHECKMARK} Quotes generation successful!`);

			return JSON.parse(quotes.content);
		}
	}
}
