import types from './actionTypes';
import server from '../server';

export const fetchUsersData = () => async (dispatch) => {
	try {
	const usersData = await server.getData();
	dispatch ({
		type: types.SET_USERS_DATA,
		payload: usersData
	});
	}
	catch (e) {
		dispatch ({
			type: types.SET_ERROR,
			payload: e
		});
	}
};

export const changeLanguage = () => {
	return {
		type: types.CHANGE_LANGUAGE,
	}
};

export const radioChange = (fieldName, fieldValue) => {
	return {
		type: types.RADIO_CHANGE,
		payload: {fieldName, fieldValue}
	}
};

export const setFilterValue = (value) => {
	return {
		type: types.SET_FILTER_VALUE,
		payload: value
	}
};

export const changeFavourite = (id) => {
	return {
		type: types.CHANGE_FAVOURITE,
		payload: id
	}
};
