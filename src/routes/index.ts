import { Router } from "express";
import task from "./TaskRoutes";

const router = Router();

router.use('/task', task);

export default router;