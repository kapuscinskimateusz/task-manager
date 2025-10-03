import { Router } from "express";

import projectController from "../controllers/projectController";

const router = Router();

router
	.route("/")
	.get(projectController.getProjects)
	.post(projectController.createProject);

router.route("/:id").get(projectController.getProject);

export default router;
