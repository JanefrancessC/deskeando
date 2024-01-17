import React from "react";

const NoBookings = () => {
	return (
		<div className="w-100 d-flex flex-column align-items-center mx-auto">
			<h3 style={{ color: "dimgrey" }}>No Booking Data Found</h3>
			<p>Make a booking or adjust filters</p>
		</div>
	);
};

export default NoBookings;
