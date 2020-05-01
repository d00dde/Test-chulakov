import types from './actionTypes';
import { rus, eng } from '../languages';
import { filterAndSortUsers } from './extendsFunctions';

const initState = () => {
	const isPathExist = window.location.pathname !== '/';
	const parts = window.location.pathname.split('/');  //Неустойчиво к ошибкам в редактировании адресной строки
	return {
		usersData: null,
		modifiedData: null,
		language: rus,
		sortByField: isPathExist ? parts[1] : 'id',
		sortDirection: isPathExist ? parts[2] : 'forward',
		filterValue: isPathExist ? parts[4] : '',
		viewType: isPathExist ? parts[3] : 'table'
	}
}

export const reducer = (state = initState(), action) => {
	//console.log('action: ', action.type);
	//console.log('data: ', action.payload);
	switch(action.type) {
		case types.SET_USERS_DATA:
			return {...state,
				usersData: action.payload,
				modifiedData:filterAndSortUsers({...state, usersData:action.payload})
			};
		case types.CHANGE_LANGUAGE:
			return {
				...state,
				language: state.language === rus ? eng : rus
			};
		case types.RADIO_CHANGE:
			return {
				...state,
				[action.payload.fieldName]: action.payload.fieldValue,
				modifiedData: filterAndSortUsers({...state, [action.payload.fieldName]: action.payload.fieldValue})
			};
		case types.SET_FILTER_VALUE:
			return {
				...state,
				filterValue: action.payload,
				modifiedData: filterAndSortUsers({...state, filterValue: action.payload})
			};
		default: return state;
	}

}
