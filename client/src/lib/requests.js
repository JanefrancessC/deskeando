import axios from "axios";
import { notifySuccess, notifyError } from "./toastify";

const deleteBooking = (e, url, setReload) => {
	const bookingId = e.target.id;
	const bookingUrl = `${url}/${bookingId}`;
	const token = JSON.parse(localStorage.getItem("data")).token;

	const options = {
		headers: {
			Authorization: `Bearer ${token}`,
			"content-type": "application/json",
		},
	};

	axios.delete(bookingUrl, options).then((response) => {
		if (response.status === 200) {
			notifySuccess("Booking deleted successfully");
			setReload(true);
		} else {
			notifyError("Error: Try again later");
		}
	});
};

export { deleteBooking };
