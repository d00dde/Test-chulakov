import { useState, useEffect } from 'react';

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
	const [ player, setPlayer ] = useState({
		needStop: null,
		played: null
	});

	useEffect(() => {
		//console.log(player)
		if(player.needStop)
			player.needStop.pause();
		if(player.played)
			player.played.play();
	}, [player]);

	const [ observer ] = useState(() => {
		return new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(!entry.isIntersecting)
					return
				console.log(entry)
				setPlayer((prevState) => ({
					needStop: prevState.played ? prevState.played : null,
					played: entry.isIntersecting ? entry.target : null
				}));
			});
		},{
			rootMargin: '-45% 0% -45% 0%',
			threshold: 0
		});
	});
	const observeVideos = () => {
		document.getElementById(parentId).childNodes.forEach((node) => {
			if(!node.childNodes[1])
				return;
			if(node.childNodes[1].childNodes[0].tagName === 'VIDEO'){
				observer.observe(node.childNodes[1].childNodes[0]);
			}
		});
	}
	const setPlayedVideoHandler = (video) => {

	}

	return {
		observeVideos,
		setPlayedVideoHandler
	}
}
