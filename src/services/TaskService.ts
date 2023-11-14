import Task from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";
import { DeepPartial, DeleteResult, UpdateResult } from "typeorm";
import IService from "./IService";

class TaskService implements IService<Task>{
    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async findAll(): Promise<Task[]> {
        return await this.taskRepository.findAll();
    }

    async findBy(options: object): Promise<Task[]> {
        return await this.taskRepository.findBy(options);
    }

    async findOne(options: object): Promise<Task | null> {
        return await this.taskRepository.findOne(options);
    }

    async create(task: DeepPartial<Task>): Promise<Task> {
        return await this.taskRepository.create(task);
    }

    async update(id: number, columns: object): Promise<UpdateResult> {
        return await this.taskRepository.update(id, columns);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.taskRepository.delete(id);
    }
}

export default TaskService;
