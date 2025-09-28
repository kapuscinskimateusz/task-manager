import { Router } from "express";
import statusController from "../controllers/statusController";

const router = Router();

router
	.route("/")
	.get(statusController.getStatuses)
	.post(statusController.createStatus);

router.route("/:id").delete(statusController.deleteStatus);

export default router;
