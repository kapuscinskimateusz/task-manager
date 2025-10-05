import type { NextFunction, Request, Response } from "express";
import type { FilterQuery, Model as MongooseModel } from "mongoose";

import { AppError } from "./AppError";
import { catchAsync } from "./catchAsync";

const getAll = <T>(Model: MongooseModel<T>) => {
	return catchAsync(
		async (req: Request, res: Response, _next: NextFunction) => {
			const queryObj = { ...req.query };
			const excludedFields = ["page", "sort", "limit", "fields"];
			excludedFields.forEach((el) => {
				delete queryObj[el];
			});

			let queryStr = JSON.stringify(queryObj);
			queryStr = queryStr.replace(
				/\b(gte|gt|lte|lt)\b/g,
				(match) => `$${match}`,
			);
			const filterQuery = JSON.parse(queryStr) as FilterQuery<T>;

			const query = Model.find(filterQuery);

			const doc = await query;

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
