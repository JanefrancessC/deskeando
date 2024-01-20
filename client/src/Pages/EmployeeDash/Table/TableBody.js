import React from "react";
import classNames from "classnames";
import { deleteBooking } from "../../../lib/requests";
import { formatReservationTime } from "../../../lib/helperFunctions";
const TableBody = ({ isSplitView, allBookings, setReload }) => {

	return (
		<tbody>
			{console.log(allBookings)}
			{allBookings.map((el, index) => {
				const reservationTime = formatReservationTime(el["reservationTime"]);
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>
							{isSplitView ? (
								<>
									<div>
										<i className="bi bi-calendar me-2"></i>
										<span>{el["reservationDate"]}</span>
									</div>
									<div>
										<i className="bi bi-alarm me-2"></i>
										<span>{reservationTime} to 5:00 pm</span>
									</div>
								</>
							) : (
								<div>
									<i className="bi bi-calendar me-2"></i>
									<span>{el["reservationDate"]}</span>
								</div>
							)}
						</td>
						<td className={classNames({ "time-hide": isSplitView })}>
							{el["reservationTime"]}
						</td>
						<td>{"DK-" + `${el["deskId"]}`.padStart(2, 0)}</td>
						<td>{el["deskType"]}</td>
						<td>{el["deskSize"]}</td>
						<td>
							<i className="bi bi-pencil-square mx-2"></i>
							<i
								className="bi bi-trash mx-2"
								id={el["bookingId"]}
								onClick={(e) => {
									deleteBooking(e, "/api/bookings", setReload);
								}}
							></i>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
