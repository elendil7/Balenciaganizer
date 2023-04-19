import { OpenAIApi } from 'openai';
import { config } from '../../../../../config';
import { chatGPTQuotePrompt } from '../../../../util/chatGPTConstants';

export default async function GenerateCharacterQuotes(
	openai: OpenAIApi,
	mediaName: string
) {
	// generate chat completion response
	const completion = await openai.createChatCompletion({
		model: config.chatgptModel || 'gpt-3.5-turbo',
		messages: [
			{
				role: 'user',
				content: chatGPTQuotePrompt(mediaName),
			},
		],
	});

	// get data from completion response
	const data = completion.data.choices[0].message;

	// return data
	return data;
}
