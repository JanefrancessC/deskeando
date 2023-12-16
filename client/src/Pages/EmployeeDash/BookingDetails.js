// const About = () => (
// 	<div class="mx-0 vh-100 container-fluid px-0">
// 		<div class="row vw-100 h-100 border border-primary">
// 			<div
// 				class="col-2 vh-100 me-5"
// 				style={{ backgroundColor: "#4D44B5" }}
// 			></div>
// 			<main role="main" class="col h-75">
				
// 				<div class="w-100 d-flex justify-content-around">
// 					<div class="card w-50">
// 						<h5
// 							class="card-header"
// 							style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
// 						>
// 							Booking Form
// 						</h5>
// 						<div class="card-body" style={{ backgroundColor: "#faf9ff" }}>
// 							<div class="form-group">
// 								<label class="card-text" for="exampleInputEmail1">
// 									Email address
// 								</label>
// 								<input
// 									type="email"
// 									class="form-control card-text"
// 									id="exampleInputEmail1"
// 									aria-describedby="emailHelp"
// 									placeholder="Enter email"
// 								/>
// 								<small id="emailHelp" class="form-text text-muted">
// 									We'll never share your email with anyone else.
// 								</small>
// 							</div>
// 							<div class="form-group">
// 								<label for="exampleInputPassword1">Password</label>
// 								<input
// 									type="password"
// 									class="form-control"
// 									id="exampleInputPassword1"
// 									placeholder="Password"
// 								/>
// 							</div>
// 							<div class="form-check">
// 								<input
// 									type="checkbox"
// 									class="form-check-input"
// 									id="exampleCheck1"
// 								/>
// 								<label class="form-check-label" for="exampleCheck1">
// 									Check me out
// 								</label>
// 							</div>
// 							<button type="submit" class="btn btn-primary">
// 								Submit
// 							</button>
// 						</div>
// 					</div>

// 					<div class="card">
// 						<div class="card-header">Featured</div>
// 						<div class="card-body">
// 							<h5 class="card-title">Special title treatment</h5>
// 							<p class="card-text">
// 								With supporting text below as a natural lead-in to additional
// 								content.
// 							</p>
// 							<a href="#" class="btn btn-primary">
// 								Go somewhere
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</main>
// 		</div>
// 	</div>
// );

// export default About;

import React from 'react'

const BookingDetails = () => {
  return (
     <div class="w-100 d-flex justify-content-around">
			<div class="card w-50">
				<h5
					class="card-header"
					style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
				>
					Booking Form
				</h5>
				<div class="card-body" style={{ backgroundColor: "#faf9ff" }}>
					<div class="form-group">
						<label class="card-text" for="exampleInputEmail1">
							Email address
						</label>
						<input
							type="email"
							class="form-control card-text"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" class="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div class="form-check">
						<input
							type="checkbox"
							class="form-check-input"
							id="exampleCheck1"
						/>
						<label class="form-check-label" for="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</div>
			</div>

			<div class="card">
				<div class="card-header">Featured</div>
				<div class="card-body">
					<h5 class="card-title">Special title treatment</h5>
					<p class="card-text">
						With supporting text below as a natural lead-in to additional
						content.
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
  )
}

export default BookingDetails

