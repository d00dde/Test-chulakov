import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../redux/actions';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	input:checked ~ label:before {
		transform: translateX(35px);
	}
`;
const Title = styled.div`
	padding: 10px;
	font-size: 1.2rem;
	font-weight: 700;
`;
const Switch = styled.label`
	display: block;
	position: relative;
	width: 65px;
	height: 30px;
	border: solid 2px #0062cc;
	border-radius: 15px;
	margin-bottom: 0;
	:before{
		content: '';
		display: block;
		position: absolute;
		width: 24px;
		height: 24px;
		background-color: #007bff;
		border-radius: 50%;
		top: 1px;
		left: 1px;
		transition: .2s;
	}

`;

export default () => {
	const dispatch = useDispatch();
	const languageChanger = () => {
		dispatch(changeLanguage());
	}
	return (
		<Wrapper >
			<Title>RU</Title>
			<input type='checkbox' onChange={languageChanger} id='language-switch' style={{display: 'none'}}/>
			<Switch htmlFor='language-switch'/>
			<Title>EN</Title>
		</Wrapper>
	)
}
