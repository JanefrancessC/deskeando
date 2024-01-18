import { getDeskStatus } from "./dataAccess";

export const deskStatus = async(req, res) => {
    try {
       const deskStatusDetails = await getDeskStatus()
       res.status(200).json(deskStatusDetails)  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};