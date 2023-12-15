const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
import dotenv from 'dotenv';
dotenv.config();

class Auth {
    public static encryptPassowrd(password: string): Promise<string> {
        return bcrypt.hash(password, saltRounds);
    }

    public static comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }

    public static createToken(payload: any) {
        const token: string = jwt.sign(payload, process.env.PRIVATE_KEY_TOKEN ? process.env.PRIVATE_KEY_TOKEN : '8-2jU-$7V7b5-6A5N5w8$N2Jn-$V7-5$N-8vAn5nNy5Y5a$-B8X3$4ALH1Q9M24BSRWTP8J6YJ5FKO7VE0G', { expiresIn: '24h' });
        return token;
    }

    public static checkToken() { }
}

export default Auth;