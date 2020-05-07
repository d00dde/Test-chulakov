import React from 'react';
import { FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/actions';

export default () => {
	const { isNoData, language, value } = useSelector((state) => ({
			isNoData: !state.usersData,
			value: state.filterValue,
			language: state.language.NameFilter
		}));
	const dispatch = useDispatch();

	const filterHandler = (e) => {
		const value = e.target.value;
		dispatch(setFilterValue(value));
	}
	return (
		<FormControl
			disabled={isNoData}
			onChange={filterHandler}
			placeholder={language.placeholder}
			value={value}
		/>
	)
}
