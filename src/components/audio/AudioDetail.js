import React, { useState } from "react";
import { getData } from "./TrackListData";

const AudioDetail = () => {
	const [showTrack, setShowTrack] = useState(false);
	const onTrackTitleClick = (index) => {
		setShowTrack(index);
	};
	const trackListData = getData();

	const renderedList = trackListData.map((track, index) => {
		const active = index === showTrack ? true : false;
		return (
			<div key={track.trackName} onClick={() => onTrackTitleClick(index)}>
				<h5>{track.trackName}</h5>
				<div hidden={!active}>
					<audio src={track.trackSrc} controls></audio>
					<img src={track.trackArtSrc} alt="track artwork"></img>
				</div>
			</div>
		);
	});

	return <div  className='player'>
		<h1>TRACKS</h1>
		{renderedList}</div>;
};

export default AudioDetail;
