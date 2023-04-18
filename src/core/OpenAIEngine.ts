import { OpenAIApi } from 'openai';
import AuthorizeUser from '../api/openai/v1/controllers/AuthorizeUser';
import { config } from '../../config';
import { chatGPTQuotePrompt } from '../util/chatGPTConstants';
import { writeFileSync } from 'fs';

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

	// ! TODO - outsource this to controllers directory (e.g., GetCharacterQuotes.ts).
	// ! TODO - find way to parse string into JSON object (so we can access each individual key value pair)
	public async generateChatCompletionResponse() {
		const completion = await this.getOpenAI().createChatCompletion({
			model: config.chatgptModel || 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content: chatGPTQuotePrompt('Mission impossible'),
				},
			],
		});

		const data = completion.data.choices[0].message;

		console.log(data);

		// parse the data string above into a JSON object (so we can access each individual key value pair)
	}
}
