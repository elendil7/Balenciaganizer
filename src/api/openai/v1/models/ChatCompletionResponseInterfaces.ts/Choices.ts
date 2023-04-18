import Message from './Message';

export default interface Choices {
	index: number;
	message: Message;
	finish_reason: string;
}
