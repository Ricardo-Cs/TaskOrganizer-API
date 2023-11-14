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

    async create(task: any): Promise<Task> {
        const taskObject: Task = new Task();
        
        taskObject.name = task.name;
        taskObject.description = task.description;
        taskObject.user = task.user;

        return await this.taskRepository.create(taskObject);
    }

    async update(task: any): Promise<UpdateResult> {
        const id: number = task.id;
        return await this.taskRepository.update(id, {...task});
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.taskRepository.delete(id);
    }
}

export default TaskService;
