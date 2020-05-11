import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { radioChange } from '../../redux/actions';
import { ButtonGroup, Button } from 'react-bootstrap';
import  options  from '../../options';

export default ({ langField, fieldName }) => {
	const { activeValue, language } = useSelector((state) => ({
			activeValue: state[fieldName],
			language: state.language[langField]
		}));
	const dispatch = useDispatch();

	const setActiveValue = (fieldName, fieldValue) => dispatch(radioChange(fieldName, fieldValue));

	const chooseButton = (e) => {
		if(e.target.classList.contains('active'))
			return;
		setActiveValue(fieldName, e.target.dataset.sort);
	};
	const buttonsList = options[fieldName].map((option) => (
		<Button
			key={option}
			data-sort={option}
			active={activeValue === option ? 'active' : null}
			size="lg"
			className="mb-2"
			onClick={chooseButton}
		>
			{language[option]}
		</Button>
		));
	return (
		<ButtonGroup size="lg" className="mb-2" style={{width: '100%'}}>
			{buttonsList}
		</ButtonGroup>
	)
}
