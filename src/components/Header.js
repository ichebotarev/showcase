import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
	return (
		<div className="nav-container">
			<Link className="link-text" to="/">
				Home
			</Link>
			<Link className="link-text" to="/audio">
				Audio
			</Link>
			<Link className="link-text" to="/video">
				Video
			</Link>
			<Link className="link-text" to="/aboutme">
				About Me
			</Link>
			<Link className="link-text" to="/imagedesign">
				ImageDesign
			</Link>
			<Link className="link-text" to="/contact">
				Contact
			</Link>
		</div>
	);
};

export default Header;
