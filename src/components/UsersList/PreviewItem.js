import React from 'react';
import styled from 'styled-components';
import { basePath } from '../../options';

const Card = styled.div`
	width: ${props => props.video ? '100%' : '48%'};
	min-height: 310px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	border: 1px solid #eee;
	background-color: #f3f3f3;
	border-radius: 5px;
	box-shadow: -2px 2px 2px 3px #ccc;
	font-size: 1.3rem;
	text-align: center;
	margin: 10px;
	@media (max-width: 1200px) {
		{
			width: ${props => props.video ? '100%' : '47%'};
		}
	}
	@media (max-width: 992px) {
		{
			width: 100%;
		}
	}
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	width: ${props => props.video ? '50%' : '100%'};
	padding: 20px;
	@media (max-width: 992px) {
		{
			width: 100%;
		}
	}
`;
const Row = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 5px;
`;
const TitleRow = styled(Row)`
	justify-content: space-between;
`;
const NameSection = styled.div`
	display: flex;
	align-items: center;
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
const Phrase = styled.p`
	padding: 10px;
	text-align: left;
	font-style: italic;
	:before {
		content: "\\00ab";
		font-size: 1.8rem;
		padding-right: 5px;
		color: #0062cc;
	}
	:after {
		content: "\\00bb";
		font-size: 1.8rem;
		padding-left: 5px;
		color: #0062cc;
	}
`;
const Video = styled.div`
	width: 50%;
	video {
		width: 100%;
	}
	@media (max-width: 992px) {
		{
			width: 100%;
		}
	}
`;

const UserVideo = ({ video, id }) => (
	<Video data-id={id} className='video-wrapper'>
		<video controls={true} >
			<source src={`${basePath}/videos/${video}.mp4`}></source>
		</video>
	</Video>
);

export default ({
	user : { id, favourite, name, age, phone, image, phrase, video },
	ageCaption,
	favouriteHandler,
}) => {
	return(
		<Card key={id} video={!!video}>
			<Left video={!!video}>
				<TitleRow>
					<NameSection md={4} sm={12}>
						<Avatar src={`${basePath}/images/avatars/${image}.svg`} alt={image} />
						<div>{name}</div>
					</NameSection>
					<Favourite
					src={favourite ? `${basePath}/images/filled-star.png` : `${basePath}/images/empty-star.svg`}
					alt='favourite'
					onClick={() => favouriteHandler(id)}
					/>
				</TitleRow>
				<Row>{age} {ageCaption}</Row>
				<Row>{phone}</Row>
				<Phrase>{phrase}</Phrase>
			</Left>
			{video ? <UserVideo video={video} id={id} /> : null}
		</Card>
	)
}
