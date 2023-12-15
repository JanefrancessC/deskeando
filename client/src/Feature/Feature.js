import React from "react";
import "./Feature.css";

function Feature() {
	return (
		<div>
			<div className="container px-4 py-5" id="hanging-icons">
				<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
					<div className="col d-flex align-items-start">
						<div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex 		    align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
							<svg className="bi" width="1em" height="1em">
								{/* <use xlink:href="#toggles2"></use> */}
							</svg>
						</div>
						<div>
							<h3 className="fs-2 text-body-emphasis">Desk Booking </h3>
							<p>Supportall types of shared desks Shedules</p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
							<svg className="bi" width="1em" height="1em">
								{/* <use xlink:href="#cpu-fill"></use> */}
							</svg>
						</div>
						<div>
							<h3 className="fs-2 text-body-emphasis">Featured title</h3>
							<p>Easily see who-is in and invite your team to collaborate </p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
							<svg className="bi" width="1em" height="1em">
								{/* <use xlink:href="#tools"></use> */}
							</svg>
						</div>
						<div>
							<h3 className="fs-2 text-body-emphasis">Invite Teammates</h3>
							<p>Easily see who-is in and invite your team to collaborate</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature;
