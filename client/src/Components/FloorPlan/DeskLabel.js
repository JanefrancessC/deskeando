import React, { useState, useRef } from "react";
import "./DeskLabel.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useNavigate } from "react-router-dom";

const DeskLabel = ({ deskDetails, coords }) => {
	const [show, setShow] = useState(false);
	const target = useRef(null);
	const navigate = useNavigate();

	const popover = (
		<Popover id="popover-basic" className="popover-basic">
			<Popover.Header as="h2" className="popover-header">
				Desk Information
			</Popover.Header>
			<Popover.Body>
				<div>
					<h6 className="popover-body-text">Desk: {deskDetails.desk}</h6>
					<h6 className="popover-body-text">
						Desk Status: {deskDetails.status}
					</h6>
					<h6 className="popover-body-text">Desk Type/Details: -</h6>
					{deskDetails.status === "open" && (
						<Button
							className="popover-button-text"
							onClick={() => {
								navigate("/employee");
							}}
						>
							Book This Desk?
						</Button>
					)}
				</div>
			</Popover.Body>
		</Popover>
	);

	return (
		<foreignObject
			x={coords.x}
			y={coords.y}
			width="60"
			height="30"
			className={deskDetails.status}
			id="foreign"
		>
			<OverlayTrigger
				trigger="click"
				placement="bottom"
				overlay={popover}
				rootClose={true}
			>
				<div variant="success" className="info-div">
					<h6
						className={
							deskDetails.status !== "open"
								? "light-tone-letters"
								: "dark-tone-letters"
						}
					>
						{deskDetails.desk}
					</h6>
				</div>
			</OverlayTrigger>
		</foreignObject>
	);
};

export default DeskLabel;
