import { Request, Response } from 'express'
import { connection } from '../utils/db'

export async function ordersFromID(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Ordini WHERE IDUtente = ?`,
        [req.params.id],
        function(err, results, fields) {
            res.json(results)
        }
    )
}

// SELECT * FROM Ordini o JOIN Montature m ON o.IDMontature = m.Modello JOIN Lenti l ON o.IDLenti = l.Modello LEFT JOIN LAC lc ON o.IDLAC = lc.Modello WHERE o.IDOrdine = "OOO01"