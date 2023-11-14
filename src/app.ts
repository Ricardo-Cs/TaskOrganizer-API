import express from "express";
import AppDataSource from "./dataSource";
import router from "./routes";

class App {
    express: any;

    constructor() {
        this.express = express();

        try {
            this.database();
            this.middleware();
            this.router();
        } catch (error) {
            console.log(error);
        }
    }

    database() {
        AppDataSource.initialize().then(async () => {
            console.log('Database connected');
        }).catch((err) => {
            console.log(err);
        })
    }

    middleware() {
        this.express.use(express.json())
    }

    router() {
        this.express.use(router);
    }
}

export default new App().express;