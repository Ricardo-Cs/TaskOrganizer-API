import { Router } from "express";
import TaskController from "../controllers/TaskController";

const router = Router();

const taskController = new TaskController();

router.get('/tasks', async (req, res, next) => {
    await taskController.getAll(req, res, next);
});

export default router;