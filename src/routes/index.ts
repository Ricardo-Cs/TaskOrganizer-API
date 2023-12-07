import { Router } from "express";
import task from "./TaskRoutes";
import user from "./UserRoutes";
import auth from "./AuthRoutes";

const router = Router();

router.use('/task', task);
router.use('/user', user);
router.use('/auth', auth);

export default router;