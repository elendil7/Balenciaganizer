export const sleep = (seconds: number) =>
	new Promise((res) => {
		setTimeout(res, seconds * 1000);
	});
