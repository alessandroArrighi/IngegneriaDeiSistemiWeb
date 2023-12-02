import { Request, Response } from 'express'
import { connection } from '../utils/db'

export async function allLenses(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Lenti`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}