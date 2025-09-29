import type { NextFunction, Request, Response } from "express";
import type { Model as MongooseModel } from "mongoose";

import { AppError } from "./AppError";
import { catchAsync } from "./catchAsync";

const getAll = <T>(Model: MongooseModel<T>) => {
	return catchAsync(
		async (_req: Request, res: Response, _next: NextFunction) => {
			const doc = await Model.find();

			res.status(200).json(doc);
		},
	);
};

const getOne = <T>(Model: MongooseModel<T>) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const doc = await Model.findById(req.params.id);

		if (!doc) {
			return next(new AppError("No document found with that ID", 404));
		}

		res.status(200).json(doc);
	});
};

const createOne = <T>(Model: MongooseModel<T>) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const doc = await Model.create(req.body);

		res.status(201).json(doc);
	});
};

const updateOne = <T>(Model: MongooseModel<T>) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const doc = await Model.findByIdAndUpdate(req.params.id);

		if (!doc) {
			return next(new AppError("No document found with that ID", 404));
		}

		res.status(200).json(doc);
	});
};

const deleteOne = <T>(Model: MongooseModel<T>) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const doc = await Model.findByIdAndDelete(req.params.id);

		if (!doc) {
			return next(new AppError("No document found with that ID", 404));
		}

		res.status(204).json(doc);
	});
};

export default { getAll, getOne, createOne, updateOne, deleteOne };
