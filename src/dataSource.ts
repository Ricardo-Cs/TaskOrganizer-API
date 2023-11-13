import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import MainSeeder from "./database/seeds/MainSeeder";
import UsersFactory from "./database/factories/users.factory";
import dotenv from 'dotenv';
import PositionsFactory from "./database/factories/positions.factory";
import TasksFactory from "./database/factories/tasks.factory";
import { AllMigrations1699905420415 } from "./database/migrations/1699905420415-AllMigrations";

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    logging: true,
    entities: [ __dirname + '/models/*.ts'],
    migrations: [
        // Utiliza de maneira temporária
        AllMigrations1699905420415
    ],
    factories: [
        UsersFactory,
        PositionsFactory,
        TasksFactory
    ],
    seeds: [MainSeeder]
}

const AppDataSource = new DataSource(options);

export default AppDataSource;