import { Router } from "express"
import * as usersController from "../controllers/users-controller"

const router: Router = Router()

router.get("/api/utenzeClienti/:id", usersController.customersUsersFromID)
router.get("/api/utenzeAdmin/:id", usersController.adminUsersFromID)

export default router