import { Router } from "express"
import * as lacController from "../controllers/lac-controller"

const router: Router = Router()

router.get("/api/lac", lacController.allLac)

export default router