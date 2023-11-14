import { DeepPartial, DeleteResult, UpdateResult } from "typeorm";

interface IService<T> {
    findAll(): Promise<T[]>;
    findBy(options: object): Promise<T[]>;
    findOne(options: object): Promise<T | null>;
    create(entity: DeepPartial<T>): Promise<T>;
    update(id: number, columns: object): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}

export default IService;