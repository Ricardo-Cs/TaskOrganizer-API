import Auth from "../utils/Auth";
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

            // Manter verificação dessa maneira no momento. Mas alterar depois para senhas encriptadas.
            if (user.password != credentials.password) {
                throw new Error("Senha incorreta");
            }

            return Auth.createToken({ id: user.id, name: user.full_name });
        } catch (error) {
            return error;
        }
    }
}

export default AuthService;