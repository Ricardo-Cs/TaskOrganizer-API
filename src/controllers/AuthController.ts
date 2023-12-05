import { NextFunction, Request, Response } from "express";
import AuthService from "src/services/AuthService";

class AuthController {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService();
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const credentials = { 
                email: req.body.email,
                password: req.body.password.toLowerCase()
            };
    
            const login = await this.authService.login(credentials);
            res.status(200).json({'Token': 'Token: ', login})

        } catch (error) {
            next(error);
        }
    }

    async logout() {}

    async verifyEmail() {}

    async forgetPassword() {}
}

export default AuthController;