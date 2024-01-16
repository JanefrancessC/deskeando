import { React } from "react";
import TableHead from "../TableHead";
import classNames from "classnames";

const Table = ({ isSplitView, allBookings }) => {
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
				Booking Details
			</h5>
			<div class="card-body">
				<table class="table table-responsive">
					<TableHead isSplitView={isSplitView} />
					<tbody>
						{allBookings.map((el, index) => (
							<tr>
								<td>{`${index + 1}`.padStart(2, 0)}</td>
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
											<span>{el["Reserved Date"]}</span>
										</div>
									)}
								</td>
								<td className={classNames({ "time-hide": isSplitView })}>
									{el["Time"]}
								</td>
								<td>{el["DeskId"]}</td>
								<td className={classNames({ "type-hide": isSplitView })}>
									{el["DeskType"]}
								</td>
								<td>{el["DeskSize"]}</td>
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
