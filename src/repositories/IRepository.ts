import { DeepPartial } from "typeorm";

interface IRepository<T> {
    findAll(): Promise<T[]>;
    findBy(options: object): Promise<T[]>;
    findOne(options: object): Promise<T | null>;
    create(entity: DeepPartial<T>): Promise<T>;
    update(id: number, columns: object): Promise<any>;
    delete(id: number): void;
}

export default IRepository;