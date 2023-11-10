import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import MainSeeder from "./database/seeds/MainSeeder";
import UsersFactory from "./database/factories/users.factory";

const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'task_organizer',
    logging: true,
    entities: [ __dirname + '/models/*.ts'],
    migrations: [
        __dirname + '/database/migrations/*.ts'
    ],
    factories: [
        UsersFactory
    ],
    seeds: [MainSeeder]
}

const AppDataSource = new DataSource(options);

export default AppDataSource;