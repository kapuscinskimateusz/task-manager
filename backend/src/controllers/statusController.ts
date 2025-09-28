import type { NextFunction, Request, Response } from "express";

import { Status } from "../models/statusModel";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

const getStatuses = catchAsync(
	async (_req: Request, res: Response, _next: NextFunction) => {
		const statuses = await Status.find();

		res.json(statuses);
	},
);

const createStatus = catchAsync(
	async (req: Request, res: Response, _next: NextFunction) => {
		const status = await Status.create(req.body);

		res.status(201).json(status);
	},
);

const updateStatus = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const status = await Status.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!status) {
			return next(
				new AppError(`No status found with ID: ${req.params.id}`, 404),
			);
		}

		res.json(status);
	},
);

const deleteStatus = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const status = await Status.findByIdAndDelete(req.params.id);

		if (!status) {
			return next(new AppError(`No status found with ID: ${req.params.id}`));
		}

		res.status(204).send();
	},
);

export default { getStatuses, createStatus, updateStatus, deleteStatus };
