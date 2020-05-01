import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { radioChange } from '../../redux/actions';

const Wrapper = styled.div`
	width: 50%;
	display: flex;
`;

const RadioButton = styled.div`
width: 50%;
border: 1px solid black;
cursor: pointer;
&.active {
	background-color: red;
	cursor: default;
}
`;

export default ({ langField, fieldName }) => {
	const { activeValue, fields } = useSelector((state) => {
		return {
			activeValue: state[fieldName],
			fields: state.language[langField]
		}
	});
	const dispatch = useDispatch();
	const setActiveValue = (fieldName, fieldValue) => dispatch(radioChange(fieldName, fieldValue));
	const options = [];
	for(let key in fields){
		options.push({ title: fields[key], value: key});
	}
	const chooseButton = (e) => {
		if(e.target.classList.contains('active'))
			return;
		setActiveValue(fieldName, e.target.dataset.sort);
	};

	const buttonsList = options.map(({ title, value }) => (
		<RadioButton
			key={value}
			data-sort={value}
			className={activeValue === value ? 'active' : null}
			onClick={chooseButton}
		>
			{title}
		</RadioButton>
		));
	return (
		<Wrapper >
			{buttonsList}
		</Wrapper>
	)
}

/*const MSTP = (state) => {
	return { state };
}

const MATP = (dispatch) => {
	return {
		setActiveValue: (fieldName, fieldValue) => dispatch(radioChange(fieldName, fieldValue))
	}
}

export default connect(MSTP, MATP)(RadioBlock);*/
