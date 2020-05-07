import React from 'react';
import styled from 'styled-components';

const UserRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
	width: 100%;
	align-items: center;
	border: 1px solid #eee;
	font-size: 1.3rem;
	text-align: center;
`;
const Section = styled.div`
	display: flex;
	align-items: center;
	width: 33%;
	@media (max-width: 576px) {
		{
			width: 50%;
		}
	}
`;
const AgeSection = styled(Section)`
	justify-content: center;
	@media (max-width: 576px) {
		{
			justify-content: flex-end;
		}
	}
`;
const PhoneSection = styled(Section)`
	justify-content: space-around;
	@media (max-width: 576px) {
		{
			width: 100%;
			justify-content: space-between;
		}
	}
`;
const Avatar = styled.img`
	display: block;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 15px;
`;
const Favourite = styled.img`
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

export default ({user : { id, favourite, name, age, phone, image }, ageCaption, favouriteHandler}) => {
	return(
		<UserRow key={id}>
			<Section>
				<Avatar src={`/images/avatars/${image}.svg`} alt={image} />
				<div>{name}</div>
			</Section>
			<AgeSection>{age} {ageCaption}</AgeSection>
			<PhoneSection>
				<div>{phone}</div>
				<Favourite
					src={favourite ? '/images/filled-star.png' : '/images/empty-star.svg'}
					alt='favourite'
					onClick={() => favouriteHandler(id)}
				/>
			</PhoneSection>
		</UserRow>
	)
}
