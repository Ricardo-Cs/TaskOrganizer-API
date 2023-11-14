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

    async insert(req: Request, res: Response, next: NextFunction) {
        const task: any = req.body;
        try {
            const insertTask = await this.taskService.create(task);
            res.status(200).json({ 'Message': 'Task cadastrada com sucesso', insertTask })
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const task: any = req.body;
        try {
            const updateTask = await this.taskService.update(task);
            res.status(200).json({ 'Message': 'Task atualizada com sucesso', updateTask });
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const taskId = Number(req.params.id);
        try {
            const deleteTask = await this.taskService.delete(taskId);
            res.status(200).json({ 'Message': 'Task deletada com sucesso', deleteTask });
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;