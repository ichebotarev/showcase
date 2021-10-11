class Track {
	constructor(trackName, trackSrc, trackArtSrc) {
		this.trackName = trackName;
		this.trackSrc = trackSrc;
		this.trackArtSrc = trackArtSrc;
	}
}
const trackListData = [
	new Track(
		"TestTrack",
		"https://losprimeros.s3.us-west-1.amazonaws.com/tracks/02+Trizec+Properties+2015.mp3",
		"https://i1.sndcdn.com/artworks-OMOisirXGsg5IJul-BRmgzQ-t500x500.jpg"
	),
	new Track(
		"TestTrack",
		"https://losprimeros.s3.us-west-1.amazonaws.com/tracks/02+Trizec+Properties+2015.mp3",
		"https://i1.sndcdn.com/artworks-OMOisirXGsg5IJul-BRmgzQ-t500x500.jpg"
	),
	new Track(
		"TestTrack",
		"https://losprimeros.s3.us-west-1.amazonaws.com/tracks/02+Trizec+Properties+2015.mp3",
		"https://i1.sndcdn.com/artworks-OMOisirXGsg5IJul-BRmgzQ-t500x500.jpg"
	),
];

const getData = () => {
	return trackListData;
};

export { getData };
