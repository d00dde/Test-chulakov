import data from './data.json';
const SERVER_DELAY = 200;

export default {
	getData: async () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data);
			}, SERVER_DELAY);
		});
	}
}
