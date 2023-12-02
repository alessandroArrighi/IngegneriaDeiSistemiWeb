import { Request, Response } from 'express'
import { connection } from '../utils/db'

export async function ordersFromID(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Ordini WHERE IDUtente == ?`,
        [req.params.id],
        function(err, results, fields) {
            res.json(results)
        }
    )
}