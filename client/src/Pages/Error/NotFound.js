import React from "react";

const NotFound = () => {
	return (
		<div class="vh-100 card text-center">
			<div class="card-header">Error</div>
			<div class="card-body">
                <h2 class="card-title">404</h2>
                <h6 class="card-text">Not Found</h6>
				<p class="card-text">
					The resource requested could not be found on this server!
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

export default NotFound;
