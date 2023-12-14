import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../SideBar/SideBar";

const EmployeeDsh = () => {
	let userName = useLocation().state?.key || null;
	return <div>{userName ? <SideBar /> : <Forbidden />}</div>;
};

export default EmployeeDsh;
