import db from "../db.js"

export const getDesks = async(req, res) => {
try {
    const desks = await db.query(`SELECT * FROM public.desks`)
    
    return res.status(200).json(desks.rows);
} catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
}
}