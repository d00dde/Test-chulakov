import { useState } from 'react';

export const useListObserver = (parentId, classIntersection) => {
	const [ observer ] = useState(() => {
		return new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(entry.isIntersecting){
					entry.target.classList.add(classIntersection);
				}
			});
		},{
			rootMargin: '0px',
			threshold: 0.5
		});
	})
	const observeList = () => {
		document.getElementById(parentId).childNodes.forEach((node) => {
			node.classList.remove(classIntersection);
			if(node.offsetTop < window.pageYOffset + window.innerHeight && node.offsetTop > window.pageYOffset - node.offsetHeight)
				node.classList.add('bounceInRight');
		});
		document.getElementById(parentId).childNodes.forEach((node) => {
			observer.observe(node);
		});
	}
	return {
		observeList,
	}
}

export const useVideoObserver = (parentId) => {
	const [ videos, setVideos ] = useState([]);
	console.log(videos)
	const stopOthersVideos = (playedVideo) => {
		console.log(videos)
		videos.forEach((video) => {
			if(video === playedVideo)
				return;
			if(!video.paused)
				video.pause();
		});
	}

	const [ observer ] = useState(() => {
		return new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(entry.isIntersecting)
					entry.target.play();
				else
				entry.target.pause();
			});
		}, {
			rootMargin: '-45% 0% -45% 0%',
			threshold: 0
		});
	});

	const observeVideos = () => {
		const currentVideos = [];
		document.getElementById(parentId).childNodes.forEach((node) => {
			if(!node.childNodes[1])
				return;
			if(node.childNodes[1].childNodes[0].tagName === 'VIDEO'){
				const video = node.childNodes[1].childNodes[0];
				observer.observe(video);
				video.onplay = (video) => stopOthersVideos(video);
				currentVideos.push(video);
			}
		});
		setVideos(currentVideos);
	}

	return {
		observeVideos,
	}
}
