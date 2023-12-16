import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";

const EmployeeDsh = () => {
	let userName = useLocation().state?.key || null;
	return <div>{userName ? <SideBar children={<Topbar />} /> : <Forbidden />}</div>;
};

export default EmployeeDsh;
