const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

class Auth {
    async encryptPassowrd(password: string): Promise<string> {
        return bcrypt.hash(password, saltRounds);
    }

    async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }

    async createToken() {}

    async checkToken() {}
}

export default Auth;