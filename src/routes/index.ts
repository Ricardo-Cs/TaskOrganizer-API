import { Router } from "express";
import task from "./TaskRoutes";
import user from "./UserRoutes";

const router = Router();

router.use('/task', task);
router.use('/user', user);

export default router;