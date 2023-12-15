import React from "react";
import "./Hero.css";
import hero from "../Pages/images/hero-img.jpg";

function Hero() {
	return (
		<section className="background ">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className=" col-sm-6 row img-fluid back-img">
					<img className="hero-img" src={hero} alt="Sample" />
				</div>
				<div className="col-sm-6 row p-5">
					<h1 className="main display-5 fw-bold text-body-emphasis lh-1 mb-3">
						Make Your Office Flexible with <h1 className="name">Deskeando</h1>
					</h1>
					<p className="lead">
						Give your people a simple tool to book their desks and <br />
						rooms -next to the co-workers they miss seeing.
					</p>
					<div className=" d-grid d-md-flex justify-content-md-start">
						<button
							type="button"
							className="button button-hero rounded px-4 py-2"
						>
							Book A Meeting
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
