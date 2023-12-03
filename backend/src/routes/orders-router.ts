import { Router } from "express"
import * as ordersController from "../controllers/orders-controller"

const router: Router = Router()

router.get("/api/ordini/:id", ordersController.ordersFromID)

export default router