import React from "react";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let textofooter="Copyright &copy; Your Website 2019"
	
	return (
		<>
		<Jumbotron/>
		<Footer texto={textofooter}/>
		</>	
	);
};

export default Home;
