export const chatGPTQuotePrompt = (
	mediaName: string
) => `Generate quotes by characters from the following film/TV show: "${mediaName}".

Requirements:
- Output no additional information besides the quotes, in the following format: a JSON object {} with each key being the name of the character (string), and each value being an array [] of quotes (each quote being a string).
- Generate the quotes in the style of Balenciaga (fashion company).
- Use the word "Balenciaga" in most sentences, if and only if you can maintain the quality and comedy of the quote.
- Quotes should be funny, ironic, creative, and witty. Keep them concise where possible, with a few longer ones.
- Generate 2 maximum quotes per character. Remember, quality over quantity.`;

export const chatGPTImagePromptPrompt = `Now, act as a Balenciaga fashion designer with 20 years of experience. I want you to dress each of the characters in the aforementioned response (you gave) in a unique Balenciaga piece for a runway show. Just write the name of the character and the piece. Remember, it's a 1990 fashion show.

Ok, now this is a prompt that I use to generate images from another AI image generation tool called Midjourney: '1990 screengrab of female model Hermione Granger wearing a grotesque black Balenciaga dress, fashion movie scene, Balenciaga commercial --ar 3:2 --v 5'.

I want you to rewrite the prompt but for every character, with the clothes you chose for them. Remember to write the prompt exactly as I pasted it, with the same format and parameters. Only change the gender of the model, the name of the character, and the description of the clothing.

The prompts must be in the following format: a JSON object with the keys being the character names, and the values being the quotes respectively.

Remember, I'm not asking you to generate any images. Only text prompts.`;
