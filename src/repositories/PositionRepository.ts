import Position from "../models/Position";
import IRepository from "./IRepository";
import { DeepPartial } from "typeorm";

class PositionRepository implements IRepository<Position> {
    findAll(): Promise<Position[]> {
        throw new Error("Method not implemented.");
    }
    findBy(options: object): Promise<Position[]> {
        throw new Error("Method not implemented.");
    }
    findOne(options: object): Promise<Position | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: DeepPartial<Position>): Promise<Position> {
        throw new Error("Method not implemented.");
    }
    update(id: number, columns: object): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}

export default PositionRepository;