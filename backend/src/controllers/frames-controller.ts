import { Request, Response } from 'express'
import { connection } from '../utils/db'

export async function allFrames(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Montature`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}