import React from "react";
import AudioDetail from "./audio/AudioDetail";
import Nebuchadnezzar from "./audio/Nebuchadnezzar";
import '../styles/Audio.scss'


import ReleaseList from "./audio/ReleaseList";

const Audio = () => {
	return (
		<div className='grid-container'>
			<ReleaseList />
			<Nebuchadnezzar />
			<AudioDetail />
		</div>
	);
};

export default Audio;
