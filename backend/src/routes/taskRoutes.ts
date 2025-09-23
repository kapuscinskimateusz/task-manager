import { Router } from "express";
import { getTaskById, getTasks } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);

export default router;
