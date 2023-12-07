import { Router } from "express";
import AuthController from "../controllers/AuthController";

const routes = Router();
const authController = new AuthController();

routes.post('/login', async (req, res, next) => {
    await authController.login(req, res, next);
});

export default routes;