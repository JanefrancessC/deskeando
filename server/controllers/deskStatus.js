import { getDeskStatus } from "./dataAccess";

export const deskStatus = async(req, res) => {
    try {
        const { date } = req.body;
       const deskStatusDetails = await getDeskStatus(date)
       res.status(200).json(deskStatusDetails)  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};