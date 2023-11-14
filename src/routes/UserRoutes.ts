import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.get('/', async (req, res, next) => {
    await userController.getAll(req, res, next);
});

routes.post('/', async (req, res, next) => {
    await userController.insert(req, res, next);
});

routes.put('/', async (req, res, next) => {
    await userController.update(req, res, next);
});

routes.delete('/:id', async (req, res, next) => {
    await userController.delete(req, res, next);
});

export default routes;