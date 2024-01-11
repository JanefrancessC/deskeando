import React from "react";

const Forbidden = () => {
	return (
		<div class="vh-100 card text-center">
			<div class="card-header">Error</div>
			<div class="card-body">
				<h5 class="card-title">403 Forbidden</h5>
				<p class="card-text">
					You do not have access to view this resource. Please login or contact
					your administrator
				</p>
				<a
					href="/"
					class="btn"
					style={{ backgroundColor: "#4D44b5", color: "white" }}
				>
					Back to home
				</a>
			</div>
			<div class="card-footer text-muted">Error</div>
		</div>
	);
};

export default Forbidden;
