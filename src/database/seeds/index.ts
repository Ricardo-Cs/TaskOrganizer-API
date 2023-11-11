import AppDataSource from "../../dataSource";
import { runSeeders } from "typeorm-extension";

AppDataSource.initialize().then(async () => {
    // Roda as seeds
    await runSeeders(AppDataSource);
    process.exit();
}).catch((err) => {
    console.log(err);
});