import { React, useState, useEffect } from "react";
import classNames from "classnames";

const DeskTable = ({ isSplitView, allDesks }) => {
	const [desks, setDesks] = useState([]);

	useEffect(() => {
		const fetchDesk = async () => {
			const token = JSON.parse(localStorage.getItem("data")).token;
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			try {
				const response = await fetch(`/api/desks`, options);
				const data = await response.json();
				console.log(data);
				setDesks(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchDesk();
	}, []);

	let cardClass = "card border-0";
	cardClass = isSplitView ? (cardClass += "splitView") : cardClass;

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
				Desk Details
			</h5>
			<div class="card-body">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Desk Name</th>
							<th scope="col">Desk Type</th>
							<th scope="col">Desk Size</th>
							<th scope="col">Remove</th>
						</tr>
					</thead>
					<tbody>
						{desks &&
							desks.map((desk, index) => (
								<tr>
									<td>{desk["desk_name"]}</td>
									<td>{desk["type"]}</td>
									<td>{desk["size"]}</td>
									<td>
										{/* <i class="bi bi-pencil-square mx-2"></i> */}
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

export default DeskTable;
