import express from "express";
import AppDataSource from "./dataSource";
import router from "./routes";

class App {
    public express: any;

    constructor() {
        this.express = express();

        try {
            this.database();
            this.router();
        } catch (error) {
            console.log(error);
        }
    }

    public database() {
        AppDataSource.initialize().then(async () => {
            console.log('Database connected');
        }).catch((err) => {
            console.log(err);
        })
    }

    public router() {
        this.express.use(router);
    }
}

export default new App().express;