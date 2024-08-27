import { Router } from "express";
import {
    createTask, editTask, viewTask, viewAllTask,removeTask
} from "../controllers/Task.controller.js"
import {
    authenticateToken,
} from "../controllers/auth.controller.js"

const router = Router();
router.use(authenticateToken)
router.post("/AddTask", createTask)
router.put("/UpdateTask/:id", editTask)
router.get("/ViewTask/:id", viewTask)
router.get("/ViewTask", viewAllTask)
router.delete("/DeleteTask/:id", removeTask)


export default router