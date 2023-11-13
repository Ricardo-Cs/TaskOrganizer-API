import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import MainSeeder from "./database/seeds/MainSeeder";
import UsersFactory from "./database/factories/users.factory";
import dotenv from 'dotenv';
import PositionsFactory from "./database/factories/positions.factory";
import { CreatePositionTable1699889922000 } from "./database/migrations/1699889922000-CreatePositionTable";
import { CreateUserTable1699630722000 } from "./database/migrations/1699630722000-CreateUserTable";
import { AllMigrations1699891709741 } from "./database/migrations/1699891709741-AllMigrations";

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
        AllMigrations1699891709741
    ],
    factories: [
        UsersFactory,
        PositionsFactory
    ],
    seeds: [MainSeeder]
}

const AppDataSource = new DataSource(options);

export default AppDataSource;