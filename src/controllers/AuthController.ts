import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const credentials = {
                email: req.body.email,
                password: req.body.password
            };

            const login = await this.authService.login(credentials);

            if (login instanceof Error) {
                return res.status(404).json({ error: login.message });
            }

            res.status(200).json({ login });

        } catch (error) {
            next(error);
        }
    }

    async logout() { }

    async verifyEmail() { }

    async forgetPassword() { }
}

export default AuthController;