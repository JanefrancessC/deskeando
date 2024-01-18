import React from "react";
import classNames from "classnames";
// import { format } from "morgan";

const TableBody = ({ isSplitView, allBookings }) => {
	const formatReservationTime = (timeString) => {
		const time = new Date(`1970-01-01T${timeString}`);
		let hours = time.getHours();
		const minutes = time.getMinutes();
		const x = hours < 12 ? "AM" : "PM";
		hours = ((hours + 11) % 12) + 1;

		return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${x}`;
	};

	
	return (
		<tbody>
			{allBookings.map((el, index) => {
			 const reservationTime = formatReservationTime(el["reservationTime"])
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
									<span>{reservationTime} to 5:00 PM</span>
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
						<i className="bi bi-trash mx-2"></i>
					</td>
				</tr>
)})}
		</tbody>
	);
};

export default TableBody;
