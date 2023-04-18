import Choices from './Choices';
import Usage from './Usage';

export default interface ChatCompletionResponseInterface {
	id: string;
	object: string;
	created: number;
	choices: Choices[];
	usage: Usage;
}
