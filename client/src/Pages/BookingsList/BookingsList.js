import React, { useState, useEffect } from "react";
import "./BookingsList.css";

const BookingsList = () => {
	const [booking, setBooking] = useState([
		{
			no: "01",

			booking: {
				date: "Monday, January 24th, 2024",
				time: "9 am to 5 am (8hr)",
			},

			desk_id: "Dk - 01",
			time: "9.00 to 5:00",
			desk_type: "Standing desk",
			amenities: "Keyboard",
		},
	]);

	return (
		<section>
			<div className="container-fluid p-5">
				<div className="row flex">
					<div className="card p-0 rounded-top-4">
						<div className="card-header text-white fw-bold ps-4 rounded-top-4">
							<h5 className="mb-0">Booking Details</h5>
						</div>
						<table className="table responsive">
							<thead>
								<tr className="table-row">
									<th scope="col">No</th>
									<th scope="col">Booking</th>
									<th scope="col" id="desk_num">
										Desk Number/ID
									</th>
									<th scope="col" className="time">
										Time
									</th>
									<th scope="col" className="deskType">
										Desk Type
									</th>
									<th scope="col" className="amenities">
										Amenities
									</th>
									<th scope="col" id="amend"></th>
									<th scope="col" id="trash"></th>
								</tr>
							</thead>
							<tbody>
								{booking.map((item) => {
									return (
										<tr>
											<td>{item.no}</td>
											<td>{item["booking"].date}</td>
											<td>{item.desk_id}</td>
											<td className="time">{item.time}</td>
											<td className="deskType">{item.desk_type}</td>
											<td className="amenities">{item.amenities}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div>
							{/* {booking.map((item, key) => {
								return (
									<div>
										<div className="col-headings row flex-nowrap px-2 pt-1 mt-1 my-md-2">
											<div className="col-2 col-md-1 d-flex justify-content-center align-items-center p-0">
												<h5>No.</h5>
											</div>
											<div className="col-3 col-md-2 d-flex justify-content-center align-items-center p-0">
												<h5>Booking</h5>
											</div>
											<div className="col-4 col-md-2 d-flex justify-content-center align-items-center px-md-1">
												<h5 className="ps-md-1 mb-2">Desk Number/ID</h5>
											</div>
											<div className="col-1 flex justify-content-center align-items-center d-none d-md-flex p-0">
												<h5>Time</h5>
											</div>
											<div className="col-2 flex justify-content-center align-items-center d-none d-md-flex p-0">
												<h5>Desk Type</h5>
											</div>
											<div className="col-2 flex justify-content-center align-items-center d-none d-md-flex p-0">
												<h5>Amenities</h5>
											</div>
											<div className="col-1 flex justify-content-center align-items-center "></div>
											<div className="col-1 flex justify-content-center align-items-center "></div>
										</div>
									</div>
								);
							})} */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingsList;
