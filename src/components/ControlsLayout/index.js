import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import RadioBlock from '../RadioBlock';
import NameFilter from '../NameFilter';
import LanguageSwitch from '../LanguageSwitch';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
`;
const LeftWrapper = styled.div`
	width: 50%;
`;
const RightWrapper = styled.div`
	width: 50%;
`;
const Title = styled.div`

`;

export default () => {
	const { language } = useSelector((state) => {
	 return { language: state.language.ControlsLayout };
	});

	return (
		<Wrapper>
			<LeftWrapper>
				<Title>{language.sortBy}</Title>
				<RadioBlock  fieldName='sortByField' langField='SortByFieldsSwitch'/>
				<RadioBlock  fieldName='sortDirection' langField='SortDirectionSwitch'/>
				<NameFilter />
			</LeftWrapper>
			<RightWrapper>
				<Title>{language.view}</Title>
				<RadioBlock  fieldName='viewType' langField='ViewSwitch'/>
				<LanguageSwitch />
			</RightWrapper>
		</Wrapper>
	);
}
