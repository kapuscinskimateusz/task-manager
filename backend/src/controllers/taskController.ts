import type { NextFunction, Request, Response } from "express";

import { Task } from "../models/taskModel";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

const getTasks = catchAsync(
	async (_req: Request, res: Response, _next: NextFunction) => {
		const tasks = await Task.find();

		res.json(tasks);
	},
);

const getTask = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const task = await Task.findById(req.params.id);

		if (!task) {
			return next(new AppError(`No task found with ID: ${req.params.id}`, 404));
		}

		res.json(task);
	},
);

const createTask = catchAsync(
	async (req: Request, res: Response, _next: NextFunction) => {
		const task = await Task.create(req.body);

		res.status(201).json(task);
	},
);

const updateTask = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!task) {
			return next(new AppError(`No task found with ID: ${req.params.id}`, 404));
		}

		res.json(task);
	},
);

const deleteTask = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const task = await Task.findByIdAndDelete(req.params.id);

		if (!task) {
			return next(new AppError(`No task found with ID: ${req.params.id}`, 404));
		}

		res.status(204).send();
	},
);

export default { getTasks, getTask, createTask, updateTask, deleteTask };
