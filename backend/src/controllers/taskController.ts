import type { NextFunction, Request, Response } from "express";
import { Task } from "../models/taskModel";

export const createTask = async (req: Request, res: Response) => {
	const newTask = await Task.create(req.body);

	res.status(201).json({
		status: 'success',
		data: {
			newTask
		}
	})
}

export const getTasks = (_req: Request, res: Response, next: NextFunction) => {
	// try {
	// 	res.json(tasks);
	// } catch (error) {
	// 	next(error);
	// }
};

export const getTaskById = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	// try {
	// 	const id = parseInt(req.params.id, 10);
	// 	const task = tasks.find((t) => t.id === id);
	// 	if (!task) {
	// 		res.status(404).json({ message: "Task not found" });
	// 		return;
	// 	}
	// 	res.json(task);
	// } catch (error) {
	// 	next(error);
	// }
};
