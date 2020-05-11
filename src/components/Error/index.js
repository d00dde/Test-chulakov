import React from 'react';
import styled from 'styled-components';

const ErrorMsg = styled.h1`
min-height: 50vh;
display: flex;
	justify-content: center;
	align-items: center;
	color: tomato;
`;

export default ({ error }) => (
	<ErrorMsg>{error.msg}</ErrorMsg>
)
