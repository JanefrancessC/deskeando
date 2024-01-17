import React from "react";
import classNames from "classnames";
const TableHead = ({ isSplitView }) => {
	return (
		<thead>
			<tr>
				<th scope="col">No</th>
				<th scope="col">Date</th>
				<th className={classNames({ "time-hide": isSplitView })} scope="col">
					Time
				</th>
				<th scope="col">Desk No</th>
				<th scope="col">Type</th>
				<th scope="col">Size</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
	);
};

export default TableHead;
