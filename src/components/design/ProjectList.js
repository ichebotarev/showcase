
import React from "react";
import { useState, useEffect } from "react";
import { getData } from "./ProjectInfo";
//import ProjectListUpdate from "./ProjectListUpdate";

const ProjectList = ({ name, srcArray }) => {
	const comissionSrc = [
		"https://ivanprojects.s3.us-west-1.amazonaws.com/%5B%5D.jpeg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/0016908571_10.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/0016908601_10.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/0016908603_10.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/0024379389_10.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/0024389104_10.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/a1589244535_10.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/Mission-.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/R-13950902-1564753394-3637.jpeg.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/R-16281063-1606505350-2221.jpeg.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/R-16281063-1606505383-2157.jpeg.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/R-16281063-1608216357-6002.jpeg.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/R-16281063-1608216357-6002.jpeg.jpg",
		"https://ivanprojects.s3.us-west-1.amazonaws.com/R-16281063-1608216467-1631.jpeg.jpg",
	];

	const webGallerySrc = [
		"https://i.imgur.com/rSODjjU.jpg",
		"https://i.imgur.com/Xvuyrgo.jpg",
		"https://i.imgur.com/buygJEs.jpg",
		"https://i.imgur.com/kquN97c.jpg",
		"https://i.imgur.com/Zuf8X00.jpeg",
	];

	const projectInfoSrc = getData();

	const [showProject, setShowProject] = useState(false);
	const [imageTag, setImageTag] = useState(false);

	const onProjectsClick = (index) => {
		setShowProject(!showProject);
	};
	const ProjectUpdate = (setImageTag) => {
		useEffect(() => {
			setImageTag(true);
			return () => {
				setImageTag(false);
			};
		}, [setImageTag]);
	};

	const array = () => {
		switch (srcArray) {
			case "webGallerySrc":
				return webGallerySrc;
			case "comissionSrc":
				return comissionSrc;
			case "projectInfoSrc": {
				ProjectUpdate(setImageTag);
				return projectInfoSrc;
			}
			default:
				return [];
		}
	};
	const renderedList = array().map((image) => {
		return (
			<div className='grid-container'>
				<div>
					<img hidden={imageTag} src={image} alt="work"></img>;
					<h1 hidden={!imageTag}>{image.name}</h1>
					<h5 hidden={!imageTag}>{image.description}</h5>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div>
				<button onClick={() => onProjectsClick()}>{name}</button>
			</div>
			<div hidden={!showProject}>{renderedList}</div>
		</div>
	);
};

export default ProjectList;
