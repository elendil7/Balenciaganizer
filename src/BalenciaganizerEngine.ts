import OpenAIEngine from './core/OpenAIEngine';

export default class BalenciaganizerEngine {
	private OpenAIEngine: OpenAIEngine;

	constructor() {
		// create new instance of OpenAIEngine
		this.OpenAIEngine = new OpenAIEngine();
	}

	public run() {
		// run OpenAIEngine's getChatCompletionResponse method
		this.OpenAIEngine.generateChatCompletionResponse();
	}
}
