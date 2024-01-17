import React, { useState, useEffect } from "react";
import WallPlan from "./WallPlan.js";
import SmallDesk from "./SingleDesks/SmallDesk.js";
import SmallLaptopDesk from "./SingleDesks/SmallLaptopDesk.js";
import LaptopDeskGroup from "./DeskGroups/LaptopDeskGroup.js";
import Sofa from "./Furniture/Sofa.js";
import ReceptionDesk from "./Furniture/ReceptionDesk.js";
import ConferenceTable from "./Furniture/ConferenceTable.js";
import LDesk from "./SingleDesks/LDesk.js";
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
	const [deskInformation, setDeskInformation] = useState(deskData2);
	
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

			<ReceptionDesk xPoint={"-550"} yPoint={"-350"} />
			<Sofa xPoint={"-480"} yPoint={"-50"} />
			<ConferenceTable xPoint={"435"} yPoint={"-110"} />
			<LDesk xPoint={"-320"} yPoint={"220"} />
			<LDesk xPoint={"-160"} yPoint={"220"} />
			<LDesk xPoint={"440"} yPoint={"-330"} />

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
			<defs>
				<rect
					className="keyRect"
					id="keyRect"
					x="0"
					y="0"
					height="30"
					width="60"
					rx="15"
				/>
			</defs>
			<use x="10" y="200" href="#keyRect" fill="#009b1b" />
			<use x="10" y="250" href="#keyRect" fill="#ed5d34" />
			<text x="80" y="222" id="openText" fontWeight="bold" fontSize="19">
				Open - Available.
			</text>
			<text x="80" y="272" id="closedText" fontWeight="bold" fontSize="19">
				Closed - Already Reserved.
			</text>
		</svg>
	);
};

export default FloorPlan;
