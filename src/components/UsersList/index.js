import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TableItem from './TableItem';
import PreviewItem from './PreviewItem';

const Wrapper = styled.div`
	min-height: 40vh;
`;

export default () => {
	const { data, viewType } = useSelector((state) => {
		return {
			data: state.modifiedData,
			viewType: state.viewType
		}
	});
	const ViewItem = viewType === 'table' ? TableItem : PreviewItem;
	const usersList = data.map((user) => < ViewItem user={user} key={user.id}/> );
	return (
		<Wrapper>
			{usersList}
		</Wrapper>
	)
}

/*const MSTP = (state) => {
	return {
		data: state.modifiedData,
		viewType: state.viewType
	}
}

export default connect(MSTP, null)(UsersList);*/
