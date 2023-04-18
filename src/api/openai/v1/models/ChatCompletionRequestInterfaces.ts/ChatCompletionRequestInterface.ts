import Messages from './Messages';

export default interface ChatCompletionRequestInterface {
	model: string;
	messages: Messages[];
	temperature?: number;
	top_p?: number;
	n?: number;
	stream?: boolean;
	stop?: string | string[];
	max_tokens?: number;
	presence_penalty?: number;
	frequency_penalty?: number;
	logic_bias?: Map<string, number>;
	user?: string;
}
