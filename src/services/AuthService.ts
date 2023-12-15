import UserService from "./UserService";

class AuthService {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async login(credentials: { email: string, password: string }) {
        try {
            const user = await this.userService.findOne({ where: { email: credentials.email } });

            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            if (user.password != credentials.password) {
                throw new Error("Senha incorreta");
            }

            return user;
        } catch (error) {
            return error;
        }
    }
}

export default AuthService;