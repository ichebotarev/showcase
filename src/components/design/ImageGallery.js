import React from "react";
import { useState, useEffect } from "react";
import instagram from "../../apis/instagram";

const ImageGallery = () => {
	const [media, setMedia] = useState([]);
	useEffect(() => {
		const search = async () => {
			const response = await instagram.get();
			setMedia(response.data);
		};
		search();
	}, []);

	console.log(media);
	return <div>INSTAGRAM</div>;
};

export default ImageGallery;
