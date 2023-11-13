import AppDataSource from "src/dataSource";
import User from "../models/User";
import { Repository } from "typeorm";
import IRepository from "./IRepository";

class UserRepository implements IRepository<User>{
    private repository!: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

    findBy(options: object): Promise<User[]> {
        return this.repository.find(options);
    }

    findOne(options: object): Promise<User | null> {
        return this.repository.findOne(options);
    }

    create(user: User): Promise<User> {
        const createdUser = this.repository.create(user);
        return this.repository.save(createdUser);
    }

    update(id: number, columns: object): Promise<any> {
        return this.repository.update(id, columns);
    }

    delete(id: number): void {
        this.repository.delete(id);
    }   
}

export default UserRepository;