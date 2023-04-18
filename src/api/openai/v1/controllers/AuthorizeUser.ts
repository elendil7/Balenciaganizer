import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_APIKEY } from '../../../../util/constants';

import debugPath from '../../../../util/debugPath';
const LOG = debugPath(__dirname);

export default function AuthorizeUser() {
	try {
		const configuration = new Configuration({
			// organization: OPENAI_ORGANIZATION,
			apiKey: OPENAI_APIKEY,
		});

		return new OpenAIApi(configuration);
	} catch (e) {
		LOG(e);
	}
}
