import React from "react";
import "./Hero.css";
import hero from "../../images/hero-img.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate()
	return (
		<section className="background d-flex align-item-center">
			<div className="container px-4 py-5">
				<div className="row align-items-center g-lg-5 py-5">
					<div className="col-lg-6 text-lg-start">
						<h1 className="main display-4 fw-bold lh-1 text-body-emphasis mb-3">
							Make Your Office Flexible with Deskeando
						</h1>
						<p className="col-lg-6 fs-4">
							Give your people a simple tool to book their desks and <br />
							rooms -next to the co-workers they miss seeing.
						</p>
						<div className=" d-grid d-md-flex justify-content-md-start">
							<button
								type="button"
								className="button button-hero rounded px-4 py-2"
								onClick={() => navigate("/signup")}
							>
								Book A Meeting
							</button>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="  row img-fluid back-img">
							<img
								className="hero-img"
								src={hero}
								alt="Sample"
								height="380"
								weight="500"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
