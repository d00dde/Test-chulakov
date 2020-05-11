import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import TableItem from './TableItem';
import PreviewItem from './PreviewItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeFavourite } from '../../redux/actions';
import { useListObserver, useVideoObserver } from '../../hooks';

const Wrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> div {
		opacity: 0;
	}
	.video-wrapper {
		display: none;
	}
	.bounceInRight{
		animation: bounceInRight 1s;
		opacity: 1;
		.video-wrapper {
			display: block;
		}
	}
`;

export default () => {
	const  { observeList } = useListObserver('users-list', 'bounceInRight');
	const { observeVideos } = useVideoObserver('users-list');

	const { data, viewType, language } = useSelector((state) => ({
			data: state.modifiedData,
			viewType: state.viewType,
			language: state.language.UsersList,
	}));
	const dispatch = useDispatch();

	const favouriteHandler = (id) => {
		dispatch(changeFavourite(id));
	}

	const ageCaption = (age) => {
		const decades = Math.floor(age/10);
		const years = age%10;
		if(decades === 1)
			return language.age_3;
		if(years === 1)
			return language.age_1;
		if(0 < years && years < 5)
			return language.age_2;
		return language.age_3;
	}
	const ViewItem = viewType === 'table' ? TableItem : PreviewItem;

	const usersList = useMemo (() => data.map((user) => (
		<ViewItem
			key={user.id}
			user={user}
			ageCaption={ageCaption(user.age)}
			favouriteHandler={favouriteHandler}
		/>
	)), [data, ViewItem]);

	useEffect(() => {
		observeList();
		observeVideos();
	}, [data, observeList, observeVideos]);

	return (
		<Wrapper id='users-list'>
			{usersList}
		</Wrapper>
	)
}
