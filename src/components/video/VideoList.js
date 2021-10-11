import React from "react";
import { getData } from "./VideoListData";

const VideoList = () => {
	const videoListData = getData();
	const renderedVideoList = videoListData.map((video) => {
		return (
			<div>
				<h1>
					{video.videoName} ({video.videoYear})
				</h1>
				<p>{video.videoDesc}</p>
				<video src={video.videoSrc} controls width={200} height={200}></video>
			</div>
		);
	});
	return <div>{renderedVideoList}</div>;
};

export default VideoList;
