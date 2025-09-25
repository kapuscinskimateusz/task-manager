import type { NextFunction, Request, Response } from "express";
import { Task } from "../models/taskModel";

export const createTask = async (req: Request, res: Response) => {
	const newTask = await Task.create(req.body);

	res.status(201).json({
		status: "success",
		data: {
			newTask,
		},
	});
};

export const getTasks = (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {};

export const getTaskById = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {};
