import { Request, Response } from "express"
import { connection } from "../utils/db"

export async function allAppointments(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Appuntamenti`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}