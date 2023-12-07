import AppDataSource from "../dataSource";
import User from "../models/User";
import { DeepPartial, DeleteResult, Repository, UpdateResult } from "typeorm";
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

    create(user: DeepPartial<User>): Promise<User> {
        const createdUser = this.repository.create(user);
        return this.repository.save(createdUser);
    }

    update(id: number, columns: object): Promise<UpdateResult> {
        return this.repository.update(id, columns);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }   
}

export default UserRepository;