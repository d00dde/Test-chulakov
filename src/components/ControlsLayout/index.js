import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import RadioBlock from '../RadioBlock';
import NameFilter from '../NameFilter';
import LanguageSwitch from '../LanguageSwitch';

export default () => {
	const { language } = useSelector((state) => ({language: state.language.ControlsLayout }));
	return (
		<Row>
			<Col md={5}>
				<h3>{language.sortBy}</h3>
				<RadioBlock  fieldName='sortByField' langField='SortByFieldsSwitch'/>
				<RadioBlock  fieldName='sortDirection' langField='SortDirectionSwitch'/>
				<NameFilter />
			</Col>
			<Col md={1}></Col>
			<Col md={5}>
				<h3>{language.view}</h3>
				<RadioBlock  fieldName='viewType' langField='ViewSwitch'/>
				<LanguageSwitch />
			</Col>
		</Row>
	);
}
