class Video {
	constructor(videoName, videoSrc, videoDesc, videoYear) {
		this.videoName = videoName;
		this.videoSrc = videoSrc;
		this.videoDesc = videoDesc;
        this.videoYear = videoYear;
	}
}


const videoListData = [
new Video ('video 1', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/00055+Market+Close_Ode+to+a+Sales+Nothing.mp4',
'this video is about a lot of cool shit',
1994),
new Video ('video 2', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/563361272.mp4',
'this video is about a lot of cool shit',
2007),
new Video ('video 3', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/MISCELLANEOUS+READING+AND+A+FILM+by+IVAN+CHEBOTAREV.mp4',
'this video is about a lot of cool shit',
2013),
new Video ('video 4', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/Sequence+01+1.mp4',
'this video is about a lot of cool shit',
2017),
new Video ('video 5', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/Sequence+01.mp4',
'this video is about a lot of cool shit',
2017),
new Video ('video 6', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/first+test.mp4',
'this video is about a lot of cool shit',
2017),
new Video ('video 7', 
'https://ivanvideos.s3.us-west-1.amazonaws.com/Sequence+02+1.mp4',
'this video is about a lot of cool shit',
2017),
]

const getData = () => {
	return videoListData;
};

export { getData };
