import React from "react";
import { useState, useEffect } from "react";
import discogs from "../../apis/discogs";
import "../../styles/Audio.scss";

const ReleaseList = () => {
	const [releases, setReleases] = useState([]);
	useEffect(() => {
		const search = async () => {
			const response = await discogs.get();
			setReleases(response.data.releases);
		};
		search();
	}, []);

	if (releases[0] !== null) {
		const renderedReleaseList = releases.map((release) => {
			return (
				<div>
					<div key={release.id}>
						<img src={release.thumb} alt="release"></img>
						<p>
							{release.title} {release.label} {release.format}
						</p>
					</div>
				</div>
			);
		});
		return <div className="release-list">{renderedReleaseList}</div>;
	}

	return <div>{""}</div>;
};

export default ReleaseList;
