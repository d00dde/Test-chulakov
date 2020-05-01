import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setFilterValue } from '../../redux/actions';

const NameInput = styled.input`

`;

const NameFilter = ({ data, value, language, setFilterValue }) => {
	const filterHandler = (e) => {
		const value = e.target.value.trim().toLowerCase();
		setFilterValue(value);
	}
	return (
		<div>
			<NameInput
				disabled={!data}
				onChange={filterHandler}
				placeholder={language.placeholder}
				value={value}
			/>
		</div>
	)
}

const MSTP = (state) => {
	return {
		data: state.usersData,
		value: state.filterValue,
		language: state.language.NameFilter
	}
}
const MATP = (dispatch) => {
	return {
		setFilterValue: (filtredData) => dispatch(setFilterValue(filtredData))
	}
}

export default connect(MSTP, MATP)(NameFilter);
