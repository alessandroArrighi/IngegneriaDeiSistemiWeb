import { Request, Response } from "express"
import { connection } from "../utils/db"

export async function allLac(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM LAC`,
        [],
        function(err, results, fields) {
            res.json(results)
        } 
    )
}