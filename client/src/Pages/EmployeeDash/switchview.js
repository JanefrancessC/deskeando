function switchView(index) {
	switch (index) {
		case "0":
			return {
				floorPlan: false,
				listView: {
					splitView: false,
				},
			};
		case "1":
			return {
				floorPlan: true,
				listView: {
					splitView: false,
				},
			};
		case "2":
			return {
				floorPlan: false,
				listView: {
					splitView: true,
				},
			};
		case "3":
			return {
				floorPlan: false,
				listView: {
					splitView: false,
				},
			};
		case "4":
			return {
				floorPlan: false,
				listView: {
					splitView: true,
				},
			};
	}
}
export { switchView };
