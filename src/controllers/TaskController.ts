import { NextFunction, Request, Response } from "express";
import TaskService from "../services/TaskService";

class TaskController {
    private taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const tasks = await this.taskService.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;