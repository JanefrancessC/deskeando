import React, { useState, useEffect } from "react";
import WallPlan from "./WallPlan.js";
import SmallDesk from "./SingleDesks/SmallDesk.js";
import SmallLaptopDesk from "./SingleDesks/SmallLaptopDesk.js";
import LaptopDeskGroup from "./DeskGroups/LaptopDeskGroup.js";
import Sofa from "./Furniture/Sofa.js"
import ReceptionDesk from "./Furniture/ReceptionDesk.js";
import ConferenceTable from "./Furniture/ConferenceTable.js";
import DeskLabel from "./DeskLabel.js";

import {
	computerGroupCoords,
	smallLaptopDeskCoords,
	smallDeskCoords,
	statusCoords,
	deskData,
	deskData2,
} from "./PlanCoords.js";

const FloorPlan = () => {
	const [deskInformation, setDeskInformation] = useState(deskData);

	return (
		<svg
			className="deskplan-container"
			viewBox="-600 -400 1200 800"
			pointerEvents="all"
			preserveAspectRatio="xMidYMid meet"
		>
			<svg x="-600" y="-400">
				<WallPlan />
			</svg>

			<ReceptionDesk xPoint={"-550"} yPoint={"-350"}/>
			<Sofa xPoint={"-480"} yPoint={"-50"} />
			<ConferenceTable xPoint={"435"} yPoint={"-110"}/>

			{computerGroupCoords.map((item, index) => {
				return (
					<svg x={item.x} y={item.y} key={index}>
						<LaptopDeskGroup />
					</svg>
				);
			})}
			{smallLaptopDeskCoords.map((item, index) => {
				return (
					<svg x={item.x} y={item.y} key={index}>
						<SmallLaptopDesk />
					</svg>
				);
			})}
			{smallDeskCoords.map((item, index) => {
				return (
					<svg x={item.x} y={item.y} key={index}>
						<SmallDesk />
					</svg>
				);
			})}

			{deskInformation?.map((item, index) => {
				return (
					<DeskLabel
						deskDetails={item}
						coords={statusCoords[index]}
						key={index}
					/>
				);
			})}
		</svg>
	);
};

export default FloorPlan;
