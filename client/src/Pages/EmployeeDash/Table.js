import { React, useEffect, useState } from "react";
import TableHead from "./TableHead";
import classNames from "classnames";

const Table = ({ isSplitView }) => {
	const fakeData = [
		{
			"Booking Id": 7,
			"Desk Id": 1,
			"Reserved Date": "25 Apr 2025",
			"Time": "04:00:00",
			"User Id": 3,
			"Desk Type": "Standing Desk",
			"Desk size": "Medium",
		},
	];
	const [data, setData] = useState([]);
	let cardClass = "card border-0";
	cardClass = isSplitView ? (cardClass += "splitView") : cardClass;

	// useEffect(() => {
	// 	const token = JSON.parse(localStorage.getItem("data")).token;
	// 	const options = {
	// 		headers: { Authorization: `Bearer ${token}` },
	// 	};

	// 	fetchData("/api/bookings", options).then((data) => {
	// 		setData(data);
	// 	});
	// }, []);

	// const fetchData = async (url, options) => {
	// 	return fetch(url, options)
	// 		.then((response) => response.json())
	// 		.then((data) => data);
	// };
	return (
		<div
			className={classNames("card border-0", {
				splitView: isSplitView,
				"card-tb": !isSplitView,
			})}
		>
			<h5
				class="card-header"
				style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
			>
				Booking Details
			</h5>
			<div class="card-body">
				<table class="table">
					<TableHead isSplitView={isSplitView} />
					<tbody>
						{fakeData.map((el, index) => (
							<tr>
								<td>{`${index + 1}`.padStart(2, 0)}</td>
								<td>
									{isSplitView ? (
										<>
											<div>
												<i className="bi bi-calendar me-2"></i>
												<span>{el["Reserved Date"]}</span>
											</div>
											<div>
												<i class="bi bi-alarm me-2"></i>
												<span>9am to 5pm</span>
											</div>
										</>
									) : (
										<div>
											<i className="bi bi-calendar me-2"></i>
											<span>{el["Reserved Date"]}</span>
										</div>
									)}
								</td>
								<td className={classNames({ "time-hide": isSplitView })}>
									{el["Time"]}
								</td>
								<td>{el["Desk Id"]}</td>
								<td className={classNames({ "type-hide": isSplitView })}>
									{el["Desk Type"]}
								</td>
								<td >
									{el["Desk size"]}
								</td>
								<td>
									<i class="bi bi-pencil-square mx-2"></i>
									<i class="bi bi-trash mx-2"></i>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
