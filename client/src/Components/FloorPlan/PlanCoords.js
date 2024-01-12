const computerGroupCoords = [
	{ x: "150", y: "-330", rotate: "0" },
	{ x: "-60", y: "-330", rotate: "0" },
	{ x: "-270", y: "-330", rotate: "0" },
];

const smallLaptopDeskCoords = [
	{ x: "-270", y: "25" },
	{ x: "-175", y: "25" },
	{ x: "-60", y: "25" },
	{ x: "35", y: "25" },
	{ x: "150", y: "25" },
	{ x: "245", y: "25" },
];

const smallDeskCoords = [
	{ x: "-270", y: "-55" },
	{ x: "-175", y: "-55" },
	{ x: "-60", y: "-55" },
	{ x: "35", y: "-55" },
	{ x: "150", y: "-55" },
	{ x: "245", y: "-55" },
];

const statusCoords = [
	{ desk: "DK-01", x: "-270", y: "-355" },
	{ desk: "DK-02", x: "-151", y: "-355" },
	{ desk: "DK-03", x: "-270", y: "-155" },
	{ desk: "DK-04", x: "-151", y: "-155" },

	{ desk: "DK-05", x: "-60", y: "-355" },
	{ desk: "DK-06", x: "59", y: "-355" },
	{ desk: "DK-07", x: "-60", y: "-155" },
	{ desk: "DK-08", x: "59", y: "-155" },

	{ desk: "DK-09", x: "151", y: "-355" },
	{ desk: "DK-10", x: "268", y: "-355" },
	{ desk: "DK-11", x: "151", y: "-155" },
	{ desk: "DK-12", x: "268", y: "-155" },

	{ desk: "DK-13", x: "-257", y: "-75" },
	{ desk: "DK-14", x: "-162", y: "-75" },
	{ desk: "DK-15", x: "-257", y: "105" },
	{ desk: "DK-16", x: "-162", y: "105" },

	{ desk: "DK-17", x: "-47", y: "-75" },
	{ desk: "DK-18", x: "48", y: "-75" },
	{ desk: "DK-19", x: "-47", y: "105" },
	{ desk: "DK-20", x: "48", y: "105" },
];

const deskData = [
	{ desk: "DK-01", status: "open" },
	{ desk: "DK-02", status: "open" },
	{ desk: "DK-03", status: "closed" },
	{ desk: "DK-04", status: "reserved" },

	{ desk: "DK-05", status: "open" },
	{ desk: "DK-06", status: "open" },
	{ desk: "DK-07", status: "open" },
	{ desk: "DK-08", status: "open" },

	{ desk: "DK-09", status: "open" },
	{ desk: "DK-10", status: "reserved" },
	{ desk: "DK-11", status: "open" },
	{ desk: "DK-12", status: "open" },

	{ desk: "DK-13", status: "open" },
	{ desk: "DK-14", status: "open" },
	{ desk: "DK-15", status: "open" },
	{ desk: "DK-16", status: "open" },

	{ desk: "DK-17", status: "open" },
	{ desk: "DK-18", status: "closed" },
	{ desk: "DK-19", status: "reserved" },
	{ desk: "DK-20", status: "open" },
];
const deskData2 = [
	{ desk: "DK-01", status: "closed" },
	{ desk: "DK-02", status: "open" },
	{ desk: "DK-03", status: "closed" },
	{ desk: "DK-04", status: "reserved" },

	{ desk: "DK-05", status: "open" },
	{ desk: "DK-06", status: "open" },
	{ desk: "DK-07", status: "open" },
	{ desk: "DK-08", status: "open" },

	{ desk: "DK-09", status: "open" },
	{ desk: "DK-10", status: "reserved" },
	{ desk: "DK-11", status: "open" },
	{ desk: "DK-12", status: "open" },

	{ desk: "DK-13", status: "closed" },
	{ desk: "DK-14", status: "reserved" },
	{ desk: "DK-15", status: "reserved" },
	{ desk: "DK-16", status: "reserved" },

	{ desk: "DK-17", status: "reserved" },
	{ desk: "DK-18", status: "closed" },
	{ desk: "DK-19", status: "reserved" },
	{ desk: "DK-20", status: "open" },
];

export {
	computerGroupCoords,
	smallLaptopDeskCoords,
	smallDeskCoords,
	statusCoords,
	deskData,
	deskData2
};
