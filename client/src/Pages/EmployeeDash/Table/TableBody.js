import React from "react";
import classNames from "classnames";

const TableBody = ({ isSplitView, allBookings }) => {
	return (
		<tbody>
			{allBookings.map((el, index) => (
				<tr>
					<td>{index + 1}</td>
					<td>
						{isSplitView ? (
							<>
								<div>
									<i className="bi bi-calendar me-2"></i>
									<span>{el["ReservedDate"]}</span>
								</div>
								<div>
									<i class="bi bi-alarm me-2"></i>
									<span>9am to 5pm</span>
								</div>
							</>
						) : (
							<div>
								<i className="bi bi-calendar me-2"></i>
								<span>{el["ReservedDate"]}</span>
							</div>
						)}
					</td>
					<td className={classNames({ "time-hide": isSplitView })}>
						{el["Time"]}
					</td>
					<td>{"DK-" + `${el["DeskId"]}`.padStart(2, 0)}</td>
					<td>{el["DeskType"]}</td>
					<td>{el["DeskSize"]}</td>
					<td>
						<i class="bi bi-pencil-square mx-2"></i>
						<i class="bi bi-trash mx-2"></i>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
