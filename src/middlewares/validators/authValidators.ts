import { body } from "express-validator";

export const loginValidators = [
    body('email').notEmpty().withMessage('O valor do email não foi inserido.').isEmail().withMessage('O valor do email não é um e-mail válido.'),
    body('password').notEmpty().withMessage('O valor de password não foi inserido.')
];