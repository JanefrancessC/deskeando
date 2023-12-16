import db from "../db.js";

export const getDepartments = async (req, res) => {
    try {
        const dept = await db.query(`SELECT * FROM department`)
        const deptName = dept.rows.map(d => d)
            console.log("BE Dept", deptName);
            return res.json(deptName)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Server error" })
    }
}