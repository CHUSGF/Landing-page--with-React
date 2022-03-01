import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<div className="container mt-5">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-6 col-md-3">
						<Card />
					</div>
					<div className="col-12 col-sm-6 col-md-3">
						<Card />
					</div>
					<div className="col-12 col-sm-6 col-md-3">
						<Card />
					</div>
					<div className="col-12 col-sm-6 col-md-3">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
