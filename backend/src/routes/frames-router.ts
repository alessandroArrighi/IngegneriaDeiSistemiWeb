import { Router } from "express"
import * as framesController from "../controllers/frames-controller"

const router: Router = Router()

router.get("/api/montature", framesController.allFrames)

export default router