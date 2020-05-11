import types from './actionTypes';
import { rus, eng } from '../languages';
import { filterAndSortUsers, setBrowserPath } from './extendsFunctions';
import options from '../options';

const initState = () => {
	const { sortByFields, sortDirection, viewType } = options;
	const splitPath = window.location.pathname.split('/');
	const part_1 = splitPath[3];
	const part_2 = splitPath[4];
	const part_3 = splitPath[5];
	const part_4 = splitPath[6];

	return {
		usersData: null,
		modifiedData: null,
		error: null,
		language: rus,
		sortByFields: sortByFields.includes(part_1) ?  part_1 : sortByFields[0],
		sortDirection: sortDirection.includes(part_2) ?  part_2 : sortDirection[0],
		viewType: viewType.includes(part_3) ? part_3 : viewType[0],
		filterValue: part_4 ? part_4 : ''
	}
}

export const reducer = (state = initState(), action) => {
	//console.log('action: ', action.type);
	//console.log('data: ', action.payload);
	switch(action.type) {
		case types.SET_USERS_DATA:
			return {...state,
				usersData: action.payload,
				modifiedData:filterAndSortUsers({...state, usersData:action.payload}),
				error: null
			};
		case types.SET_ERROR:
			return {...state,
				usersData: null,
				modifiedData: null,
				error: action.payload
			};
		case types.CHANGE_LANGUAGE:
			return {
				...state,
				language: state.language === rus ? eng : rus
			};
		case types.RADIO_CHANGE:
			setBrowserPath({...state, [action.payload.fieldName]: action.payload.fieldValue});
			return {
				...state,
				[action.payload.fieldName]: action.payload.fieldValue,
				modifiedData: filterAndSortUsers({...state, [action.payload.fieldName]: action.payload.fieldValue})
			};
		case types.SET_FILTER_VALUE:
			setBrowserPath({...state, filterValue: action.payload});
			return {
				...state,
				filterValue: action.payload,
				modifiedData: filterAndSortUsers({...state, filterValue: action.payload})
			};
			case types.CHANGE_FAVOURITE:
			const redactData = (data) => {
				return data.map((user) => {
					if(user.id !== action.payload)
						return user
					return {...user, favourite: !user.favourite}
				});
			}
			return {
				...state,
				usersData: redactData(state.usersData),
				modifiedData: redactData(state.modifiedData)
			};
		default: return state;
	}

}
