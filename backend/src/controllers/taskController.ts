import type { Request, Response } from "express";
import { Task } from "../models/taskModel";

const getTasks = async (_req: Request, res: Response) => {
	const tasks = await Task.find();

	res.json(tasks);
};

const getTask = async (req: Request, res: Response) => {
	const { id } = req.params;

	const task = await Task.findById(id);
	if (!task) {
		return res.status(404).json({
			status: "fail",
			message: "Task not found",
		});
	}

	res.status(200).json({
		status: "success",
		data: { task },
	});
};

const createTask = async (req: Request, res: Response) => {
	const task = await Task.create(req.body);

	res.status(201).json({
		status: "success",
		data: { task },
	});
};

const updateTask = async (req: Request, res: Response) => {
	const { id } = req.params;

	const task = await Task.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return res.status(404).json({
			status: "fail",
			message: "Task not found",
		});
	}

	res.status(200).json({
		status: "success",
		data: { task },
	});
};

const deleteTask = async (req: Request, res: Response) => {
	const { id } = req.params;

	const task = await Task.findByIdAndDelete(id);
	if (!task) {
		return res.status(404).json({
			status: "fail",
			message: "Task not found",
		});
	}

	res.status(204).send();
};

export default { getTasks, getTask, createTask, updateTask, deleteTask };
