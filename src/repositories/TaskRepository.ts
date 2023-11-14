import Task from "../models/Task";
import IRepository from "./IRepository";
import { DeepPartial, DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../dataSource";

class TaskRepository implements IRepository<Task> {
    private repository!: Repository<Task>;

    constructor() {
        this.repository = AppDataSource.getRepository(Task);
    }

    findAll(): Promise<Task[]> {
        return this.repository.find({ relations: { user: true } });
    }

    findBy(options: object): Promise<Task[]> {
        return this.repository.find(options);
    }

    findOne(options: object): Promise<Task | null> {
        return this.repository.findOne(options);
    }

    create(task: DeepPartial<Task>): Promise<Task> {
        const createdTask = this.repository.create(task);
        return this.repository.save(createdTask);
    }

    update(id: number, columns: object): Promise<UpdateResult> {
        return this.repository.update(id, columns);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}

export default TaskRepository;