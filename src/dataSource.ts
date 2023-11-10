import { DataSource } from "typeorm";
import User from "./models/User";
import { CreateUserTable1699575926748 } from "./database/migrations/1699575926748-CreateUserTable";

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'task_organizer',
    synchronize: true,
    logging: true,
    entities: [ __dirname + '/models/*.ts'],
    subscribers: [],
    migrations: [
        __dirname + '/database/migrations/*.ts'
    ]
});

export default AppDataSource;