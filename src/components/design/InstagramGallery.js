import React from "react";

import { useState, useEffect } from "react";
import instagram from "../../apis/instagram";

const InstagramGallery = () => {
	const [media, setMedia] = useState([]);
	console.log(media);
	console.log("WHSFKAJKLSJFLSDA");

	useEffect(() => {
		const search = async () => {
			const response = await instagram.get();
			setMedia(response.data);
			console.log(response);
		};
		search();
	}, []);

	return (
		<div>
			<h1>hello ig</h1>
			INSTAGRAM
		</div>
	);
};

export default InstagramGallery;
