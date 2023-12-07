import User from "../models/User";
import IService from "./IService";
import { UpdateResult, DeleteResult } from "typeorm";
import UserRepository from "../repositories/UserRepository";

class UserService implements IService<User> {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async findBy(options: object): Promise<User[]> {
        return await this.userRepository.findBy(options);
    }

    async findOne(options: object): Promise<User | null> {
        return await this.userRepository.findOne(options);
    }

    async create(user: any): Promise<User> {
        const userObject = new User();

        userObject.full_name = user.full_name;
        userObject.email = user.email;
        userObject.password = user.password;
        userObject.position = user.position;

        return await this.userRepository.create(userObject);
    }

    async update(task: any): Promise<UpdateResult> {
        const id: number = task.id;
        return await this.userRepository.update(id, {...task});
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

}

export default UserService;