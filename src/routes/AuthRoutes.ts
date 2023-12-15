import { NextFunction, Request, Response, Router } from "express";
import AuthController from "../controllers/AuthController";
import { loginValidators } from "../middlewares/validators/authValidators";
import { handleValidationErrors } from "../middlewares/validators/validator";

const routes = Router();
const authController = new AuthController();

routes.post('/login', loginValidators, handleValidationErrors, async (req: Request, res: Response, next: NextFunction) => {
    await authController.login(req, res, next);
});

export default routes;