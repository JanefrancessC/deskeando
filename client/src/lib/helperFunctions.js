const formatReservationTime = (timeString) => {
	const time = new Date(`1970-01-01T${timeString}`);
	let hours = time.getHours();
	const minutes = time.getMinutes();
	const x = hours < 12 ? "am" : "pm";
	hours = ((hours + 11) % 12) + 1;

	return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${x}`;
};

export { formatReservationTime };
