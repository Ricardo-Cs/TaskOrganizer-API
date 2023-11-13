import Task from "../models/Task";
import IRepository from "./IRepository";
import { DeepPartial, Repository } from "typeorm";
import AppDataSource from "src/dataSource";

class TaskRepository implements IRepository<Task> {
    private repository!: Repository<Task>;

    constructor() {
        this.repository = AppDataSource.getRepository(Task);
    }

    findAll(): Promise<Task[]> {
        return this.repository.find();
    }

    findBy(options: object): Promise<Task[]> {
        return this.repository.find(options);
    }

    findOne(options: object): Promise<Task | null> {
        return this.repository.findOne(options);
    }

    create(task: Task): Promise<Task> {
        const createdTask = this.repository.create(task);
        return this.repository.save(createdTask);
    }

    update(id: number, columns: object): Promise<any> {
        return this.repository.update(id, columns);
    }

    delete(id: number): void {
        this.repository.delete(id);
    }
}

export default TaskRepository;