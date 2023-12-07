import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const postTaskValidators = [
    body('name').notEmpty().withMessage('O valor de (name) não foi inserido'),
    body('description').notEmpty().withMessage('O valor de (description) não foi inserido')
];

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors: any = result.array();
        const errorMessages = errors.map((error: any) => error.msg);
        return res.status(400).json({ messages: errorMessages });        
    }
    next();
};