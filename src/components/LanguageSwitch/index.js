import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeLanguage } from '../../redux/actions';

const Wrapper = styled.div`

`;
const Switch = styled.input`

`;

const LanguageSwitch = ({ changeLanguage }) => {
	return (
		<Wrapper >
			<Switch type='checkbox' onChange={changeLanguage}/>
		</Wrapper>
	)
}

const MATP = (dispatch) => {
	return {
		changeLanguage: () => dispatch(changeLanguage())
	}
}

export default connect(null, MATP)(LanguageSwitch);
