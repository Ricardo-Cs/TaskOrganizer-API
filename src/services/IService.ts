import { DeepPartial, DeleteResult, UpdateResult } from "typeorm";

interface IService<T> {
    findAll(): Promise<T[]>;
    findBy(options: object): Promise<T[]>;
    findOne(options: object): Promise<T | null>;
    create(entity: any): Promise<T>;
    update(task: any): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}

export default IService;