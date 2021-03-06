import { useState, useEffect, useCallback } from 'react';

export const useListObserver = (parentId, classIntersection) => {
	const [ observer, setObserver ] = useState(null);
	useEffect(() => {
		const newObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(entry.isIntersecting){
					entry.target.classList.add(classIntersection);
				}
			});
		},{
			rootMargin: '0px',
			threshold: 0.5
		});
		setObserver(newObserver);
		return () => newObserver.disconnect();
	}, []);

	const observeList = useCallback(() => {
		if(!observer)
			return;
		document.getElementById(parentId).childNodes.forEach((node) => {
			node.classList.remove(classIntersection);
			if(node.offsetTop < window.pageYOffset + window.innerHeight && node.offsetTop > window.pageYOffset - node.offsetHeight)
				node.classList.add('bounceInRight');
		});
		document.getElementById(parentId).childNodes.forEach((node) => {
			observer.observe(node);
		});
	}, [classIntersection, parentId, observer]);

	return {
		observeList,
	}
}

export const useVideoObserver = (parentId) => {
	const [ observer, setObserver ] = useState(null);
	const [ videos, setVideos ] = useState([]);

	useEffect(() => {
		const newObserver = new IntersectionObserver((entries) => {
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
		setObserver(newObserver);
		return () => newObserver.disconnect();
	}, []);

	const stopOthersVideos = useCallback((playedVideo) => {
		videos.forEach((video) => {
			if(video === playedVideo){
				return;
			}
			if(!video.paused)
				video.pause();
		});
	}, [videos])

	useEffect(() => {
		videos.forEach((video) => {
			video.onplay = (e) => stopOthersVideos(e.target);
		})
	}, [videos, stopOthersVideos]);

	const observeVideos = useCallback(() => {
		if(!observer)
			return;
		const currentVideos = [];
		document.getElementById(parentId).childNodes.forEach((node) => {
			if(!node.childNodes[1])
				return;
			if(node.childNodes[1].childNodes[0].tagName === 'VIDEO'){
				const video = node.childNodes[1].childNodes[0];
				observer.observe(video);
				currentVideos.push(video);
			}
		});
		setVideos(currentVideos);
	}, [parentId, observer]);

	return {
		observeVideos,
	}
}
