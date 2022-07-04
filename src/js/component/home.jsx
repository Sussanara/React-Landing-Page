import React from "react";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Card from "./Card";

//create your first component
const Home = () => {
  let text1Navbar = "Start Bootstrap"
  let text2Navbar = "Home"
  let text3Navbar = "About"
  let text4Navbar = "Services"
  let text5Navbar = "Contact"

  let text6Card = "Card title"
  let text7Card = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
  return (
    <>
	<Navbar text1 ={text1Navbar} text2 ={text2Navbar} text3={text3Navbar} text4={text4Navbar} text5={text5Navbar} />
  <Portfolio/>
  <Card text6 = {text6Card} text7= {text7Card}/>
    </>
  );
};

export default Home;
