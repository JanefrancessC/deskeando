import React from 'react'

const BookingDetails = () => {
  return (
     <div className="w-100 d-flex justify-content-around">
			<div className="card w-50">
				<h5
					className="card-header"
					style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
				>
					Booking Form
				</h5>
				<div className="card-body" style={{ backgroundColor: "#faf9ff" }}>
					<div className="form-group">
						<label className="card-text" htmlFor="exampleInputEmail1">
							Email address
						</label>
						<input
							type="email"
							className="form-control card-text"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</div>

			<div className="card">
				<div className="card-header">Featured</div>
				<div className="card-body">
					<h5 className="card-title">Special title treatment</h5>
					<p className="card-text">
						With supporting text below as a natural lead-in to additional
						content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
  )
}

export default BookingDetails

