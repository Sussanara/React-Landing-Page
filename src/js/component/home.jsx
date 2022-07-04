import React from "react";
import Jumbotron from "./jumbotron";
import Footer from "./footer";


//create your first component
const Home = () => {
	let textofooter="Copyright &copy; Your Website 2019"
	let textojumbotron="A Warm Welcome!"
	let centrojumbotron="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
	let finaljumbotron="Call to action!"
	return (
		<>
		<Jumbotron texto1={textojumbotron} texto2={centrojumbotron} texto3={finaljumbotron}/>
		<Footer texto={textofooter}/>
		</>	
	);
};

export default Home;
