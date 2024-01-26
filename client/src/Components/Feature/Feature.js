import React from "react";
import "./Feature.css";
import smiling from "../../images/smiling-young.jpg";

function Feature() {
	return (
		<section className="d-flex align-item-center">
			<div className="container px-4 py-5" id="hanging-icons">
				<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
					<div className="col d-flex align-items-start">
						{/* <i className="bi bi-exclude">
								<svg className="bi" width="0.7em" height="0.7em"></svg>
							</i> */}
						<button type="button" className="btn btn-secondary mx-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-exclude"
								viewBox="0 0 16 16"
							>
								<path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"></path>
							</svg>
						</button>

						<div>
							<h3 className="fs-2 text-body-emphasis">Desk Booking </h3>
							<p>Supportall types of shared desks Shedules</p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<button type="button" className="btn btn-secondary mx-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-exclude"
								viewBox="0 0 16 16"
							>
								<path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"></path>
							</svg>
						</button>
						<div>
							<h3 className="fs-2 text-body-emphasis">Featured title</h3>
							<p>Easily see who-is in and invite your team to collaborate </p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<button type="button" className="btn btn-secondary mx-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-exclude"
								viewBox="0 0 16 16"
							>
								<path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"></path>
							</svg>
						</button>
						<div>
							<h3 className="fs-2 text-body-emphasis">Invite Teammates</h3>
							<p>Easily see who-is in and invite your team to collaborate</p>
						</div>
					</div>
				</div>
				<div className="row bg-feature pb-0 pe-lg-0 mb-3 align-items-center">
					<div className="col-lg-6 p-lg-5 pt-lg-3">
						<h1 className="display-4 fw-bold text-body-emphasis">
							Improve collaboration and workplace experience
						</h1>
						<p className="lead">
							Hot desking or office hoteling takes employee autonomy to the next
							level. Letting your team choose where they sit to get the most out
							of the day boosts employee collaboration, increases work
							satisfaction and improves the workplace experience.
						</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
					</div>
					<div className="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg">
						<img
							className="smiling-img"
							src={smiling}
							alt="Sample"
							width="700"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Feature;
