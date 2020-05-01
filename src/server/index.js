import data from './data.json';
const SERVER_DELAY = 500;

export default {
	getData: async () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data);
			}, SERVER_DELAY);
		});
	}
}
