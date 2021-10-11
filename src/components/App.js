import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import AboutMe from "./AboutMe";
import Audio from "./Audio";
import Contact from "./Contact";
import Header from "./Header";
import ImageDesign from "./ImageDesign";
import Landing from "./Landing";
import Video from "./Video";

import '../styles/App.scss';


const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Landing} />
				<Route path="/aboutme" exact component={AboutMe} />
				<Route path="/audio" exact component={Audio} />
				<Route path="/imagedesign" exact component={ImageDesign} />
				<Route path="/video" exact component={Video} />
				<Route path="/contact" exact component={Contact} />
			</BrowserRouter>
		</div>
	);
};

export default App;
