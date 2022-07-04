import React from "react";


//create your first component
const Home = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white bg-dark ms-3" href="#">Start Bootstrap</a>
    <div class="collapse navbar-collapse position-absolute top-50 end-0 translate-middle-y me-3">
      <a class="nav-link text-white bg-dark" href="#"><small>Home</small></a>
      <a class="nav-link text-white bg-dark" href="#"><small>About</small></a>
      <a class="nav-link text-white bg-dark" href="#"><small>Services</small></a>
      <a class="nav-link text-white bg-dark"><small>Contact</small></a>
    </div>
  </div>
</nav>


	);
};

export default Home;
