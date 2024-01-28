import { deleteDesk, userAdmin } from "./dataAccess.js";

export const deleteDeskByAdmin = async (req, res) => {
	try {
		const user = req.user;
		const deskName = req.params.deskName;

		const isAdmin = await userAdmin(user.user_id);

		if (!isAdmin) {
			return res.status(403).json({ error: "Permission Denied" });
		}

		const deletedDesk = await deleteDesk(deskName);

		if (deletedDesk.length === 0) {
			return res.status(404).json({ error: "Desk not found" });
		}

		res
			.status(200)
			.json({ message: "Deleted successfully", deletedDesk: deletedDesk });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};
