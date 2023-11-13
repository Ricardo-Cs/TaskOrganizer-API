import Task from "../../models/Task";
import Position from "../../models/Position";
import User from "../../models/User";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {

    const positionFactory = factoryManager.get(Position);
    const userFactory = factoryManager.get(User);
    const taskFactory = factoryManager.get(Task);

    const positions = await positionFactory.saveMany(5)
    const users = await userFactory.saveMany(10);
    const tasks = await taskFactory.saveMany(15);
  }
}