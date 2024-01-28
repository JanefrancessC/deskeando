import { userAdmin, insertDesk, getDeskId } from "./dataAccess.js";

export const createDesk = async (req, res) => {
	try {
		const user = req.user;
		const { deskName, size, type } = req.body;

		const isAdmin = await userAdmin(user.user_id);

		// check for admin permissions
		if (!isAdmin) {
			return res.status(401).json({ error: "Permission Denied" });
		}

		// check all desk details
		if (!deskName || !size || !type) {
			return res.status(400).json({ error: "Missing desk information" });
		}

		// check if desk exists
		const deskExists = await getDeskId(deskName);

		if (deskExists !== null) {
			return res.status(409).json({ error: "Duplicate desk name" });
		}

		// create a new desk
		const newDesk = await insertDesk({ deskName, size, type });

		res
			.status(200)
			.json({ message: "Desk created successfully", newDesk: newDesk });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};
