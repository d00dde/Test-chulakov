import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { radioChange } from '../../redux/actions';
import { ButtonGroup, Button } from 'react-bootstrap';

export default ({ langField, fieldName }) => {
	const { activeValue, fields } = useSelector((state) => ({
			activeValue: state[fieldName],
			fields: state.language[langField]
		}));
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
		<Button
			key={value}
			data-sort={value}
			active={activeValue === value ? 'active' : null}
			size="lg"
			className="mb-2"
			onClick={chooseButton}
		>
			{title}
		</Button>
		));
	return (
		<ButtonGroup size="lg" className="mb-2" style={{width: '100%'}}>
			{buttonsList}
		</ButtonGroup>
	)
}
