import React, { useState, useRef } from "react";
import "./DeskLabel.css";
// react-boostrap
import Button from "react-bootstrap/Button";
// react-popup
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import { switchView } from "../../Pages/EmployeeDash/switchview";

const DeskLabel = ({ deskDetails, coords, setView }) => {
	const contentStyle = { background: "#FFFFFF" };
	const navigate = useNavigate();

	return (
		<foreignObject
			x={coords.x}
			y={coords.y}
			width="60"
			height="30"
			className={deskDetails.status}
			xmlns="http://www.w3.org/1999/xhtml"
		>
			<Popup
				trigger={
					<div id="foreign" className="info-div">
						<h6 className={"light-tone-letters"}>{deskDetails.desk}</h6>
					</div>
				}
				position="bottom"
				arrow={true}
				// arrowStyle={"#000"}
				repositionOnResize={true}
				{...{ contentStyle }}
			>
				<div className="popup-container">
					<div className="card floor-plan-card">
						<div className="card-body floor-plan-label">
							<h6 className="card-title floor-plan-title">Desk Information</h6>
							<h6>Desk: {deskDetails.desk}</h6>
							<h6>Status: {deskDetails.status}</h6>
							{deskDetails.status === "open" && (
								<Button
									className="popup-button"
									onClick={() => {
										setView(switchView("2"))
									}}
								>
									Book this desk
								</Button>
							)}
						</div>
					</div>
				</div>
			</Popup>
		</foreignObject>
	);
};

export default DeskLabel;
