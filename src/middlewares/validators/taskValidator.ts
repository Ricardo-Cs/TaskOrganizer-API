import { body } from "express-validator";

export const postTaskValidators = [
    body('name').notEmpty().withMessage('O valor de (name) não foi inserido.'),
    body('description').notEmpty().withMessage('O valor de (description) não foi inserido.'),
    body('user').notEmpty().withMessage('O valor de (user) não foi inserido.')
];