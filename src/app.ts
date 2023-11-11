import express from "express";
import AppDataSource from "./dataSource";
import { runSeeders } from "typeorm-extension";

class App {
    public express: any;

    constructor() {
        this.express = express();

        try {
            this.database();
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
}

export default new App().express;