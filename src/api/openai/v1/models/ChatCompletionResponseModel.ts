import ChatCompletionResponseInterface from './ChatCompletionResponseInterfaces.ts/ChatCompletionResponseInterface';
import Choices from './ChatCompletionResponseInterfaces.ts/Choices';
import Usage from './ChatCompletionResponseInterfaces.ts/Usage';

export default class ChatCompletionResponseModel
	implements ChatCompletionResponseInterface
{
	public id: string;
	public object: string;
	public created: number;
	public choices: Choices[];
	public usage: Usage;

	constructor(response: ChatCompletionResponseInterface) {
		this.id = response.id;
		this.object = response.object;
		this.created = response.created;
		this.choices = response.choices;
		this.usage = response.usage;
	}
}

/* Example of response from OpenAI API:
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\n\nHello there, how may I assist you today?",
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
 */
