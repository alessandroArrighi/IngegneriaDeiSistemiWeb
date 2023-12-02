import { Router } from 'express'
import * as lensesController from "../controllers/lenses-controller"

const router: Router = Router()

router.get("/api/lenti", lensesController.allLenses)

export default router