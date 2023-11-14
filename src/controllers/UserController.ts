import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.findAll();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    async insert(req: Request, res: Response, next: NextFunction) {
        const user: any = req.body;
        try {
            const insertUser = await this.userService.create(user);
            res.status(200).json({ 'Message': 'User cadastrado com sucesso', insertUser })
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const user: any = req.body;
        try {
            const updateUser = await this.userService.update(user);
            res.status(200).json({ 'Message': 'User atualizado com sucesso', updateUser });
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const userId = Number(req.params.id);
        try {
            const deleteUser = await this.userService.delete(userId);
            res.status(200).json({ 'Message': 'Task deletada com sucesso', deleteUser });
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;