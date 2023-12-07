import { NextFunction, Request, Response, Router } from "express";
import TaskController from "../controllers/TaskController";
import { postTaskValidators } from "../middlewares/validators/taskValidator";
import { handleValidationErrors } from "../middlewares/validators/validator";

const routes = Router();
const taskController = new TaskController();

routes.get('/', async (req, res, next) => {
    await taskController.getAll(req, res, next);
});

routes.post('/', postTaskValidators, handleValidationErrors, async (req: Request, res: Response, next: NextFunction) => {
    await taskController.insert(req, res, next);
  });

routes.put('/', async (req, res, next) => {
    await taskController.update(req, res, next);
});

routes.delete('/:id', async (req, res, next) => {
    await taskController.delete(req, res, next);
});

export default routes;