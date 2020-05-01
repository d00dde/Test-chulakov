import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Circle = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	width: 80px;
	height: 80px;
`;
const Part = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid #64b5f6;
	border-radius: 50%;
	animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #64b5f6 transparent transparent transparent;
	&:nth-child(1) {
		animation-delay: -0.45s;
	}
	&:nth-child(2) {
		animation-delay: -0.3s;
	}
	&:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default () => {
	return (
	<Wrapper>
		<Circle>
			<Part></Part>
			<Part></Part>
			<Part></Part>
			<Part></Part>
		</Circle>
	</Wrapper>
	)
}
