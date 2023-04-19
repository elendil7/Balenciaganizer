import * as readline from 'readline';
import { Emoji, StringOrNumber } from './constants';

export default class UserInputReader {
	private rl: readline.Interface;

	constructor() {
		this.rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}

	// ask a question and return the answer
	public async askForStringInput(
		question: string,
		mixInputLength: number,
		maxInputLength: number
	): Promise<string> {
		return new Promise((resolve) => {
			// ask the question
			this.rl.question(question, (answer: string) => {
				// sanitize the input (remove all non-alphanumeric characters from the media name)
				answer = answer.replace(/[^a-zA-Z0-9]/g, '').trim();

				// if the answer (user input) does not pass the validation, then ask the question again
				if (
					answer.length > maxInputLength ||
					answer.length < mixInputLength
				) {
					console.error(
						`${Emoji.FAILURE} Invalid input. Must be a string between ${mixInputLength} and ${maxInputLength} characters.`
					);
					this.askForStringInput(
						question,
						mixInputLength,
						maxInputLength
					).then((res) => resolve(res));
				} else {
					// if the answer passes validation, then return the answer
					resolve(answer);
					// close the readline interface
					this.rl.close();
				}
			});
		});
	}

	public async askForNumberInput(
		question: string,
		min: number,
		max: number
	): Promise<number> {
		return new Promise((resolve) => {
			// ask the question
			this.rl.question(question, (answer) => {
				// get number from answer (input)
				const num = Number(answer);

				// if the answer (user input) does not pass the validation, then ask the question again
				if (isNaN(num) || num > max || num < min) {
					console.error(
						`${Emoji.FAILURE} Invalid input. Must be a number between ${min} and ${max}.`
					);
					this.askForNumberInput(question, min, max).then((res) =>
						resolve(res)
					);
				} else {
					// if the answer is a number, then return the answer
					resolve(Number(answer));
					// close the readline interface
					this.rl.close();
				}
			});
		});
	}

	// close the readline interface (it should automatically close; this is a redundant method)
	public close() {
		this.rl.close();
	}
}
