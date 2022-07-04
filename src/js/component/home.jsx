import React from "react";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Jumbotron/>
		<Footer/>
		</>	
	);
};

export default Home;
