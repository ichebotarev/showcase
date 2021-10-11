import React from "react";
import ProjectList from "./design/ProjectList";

const ImageDesign = () => {
	return (
		<div>
			<ProjectList name="Comissions Gallery" srcArray="comissionSrc" />
			<ProjectList name="Web Design Gallery" srcArray="webGallerySrc" />
			<ProjectList name="Projects Info" srcArray="projectInfoSrc" />
		</div>
	);
};

export default ImageDesign;
