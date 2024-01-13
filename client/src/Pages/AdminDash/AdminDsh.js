import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const AdminDsh = () => {
	let userName = useLocation().state?.key || null;
	let role = "User";
	return (
		<div>
			{userName ? (
				<SideBar
					topBar={<Topbar userName={userName} role={role} />}
					bookingDetailsAdmin={<BookingDetailsAdmin />}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default AdminDshAdminDsh;
