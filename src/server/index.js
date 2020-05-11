import data from './data.json';
const SERVER_DELAY = 200;
const error = false;

export default {
	getData: async () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(error)
					reject({msg: 'Ошибка сервера'});
				else
					resolve(data);
			}, SERVER_DELAY);
		});
	}
}
