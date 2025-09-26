import type { NextFunction, Request, Response } from "express";
import type { MongoServerError } from "mongodb";
import { Error as MongooseError } from "mongoose";

import config from "../config/config";
import { AppError } from "../utils/AppError";
import { isDuplicateKeyErrorDB } from "../utils/typeGuards";

const handleCastErrorDB = (err: MongooseError.CastError) =>
	new AppError(`Invalid ${err.path}: ${err.value}`, 400);

const handleDuplicateKeyErrorDB = (err: MongoServerError) => {
	const errmsg = err.errmsg || err.message || "";

	const fieldMatch = errmsg.match(/dup key: { (\w+):/);
	const field = fieldMatch ? fieldMatch[1] : "field";

	const valueMatch = errmsg.match(/: ["'](.+?)["'] }$/);
	const value = valueMatch ? valueMatch[1] : "value";

	return new AppError(
		`Duplicate value (${value}) for ${field}. Please use another value!`,
		400,
	);
};

const handleValidationErrorDB = (err: MongooseError.ValidationError) => {
	const errors = Object.values(err.errors).map(({ message }) =>
		message.replace(/\.$/, ""),
	);

	return new AppError(`Invalid input data: ${errors.join(", ")}.`, 400);
};

const sendErrorDev = (err: AppError, res: Response) => {
	res.status(err.statusCode).json({
		error: err,
		message: err.message,
		stack: err.stack,
	});
};

const sendErrorProd = (err: AppError, res: Response) => {
	if (err.isOperational) {
		res.status(err.statusCode).json({ message: err.message });
	} else {
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const errorHandler = (
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	let error = err as AppError;
	error.statusCode = error.statusCode || 500;

	if (config.nodeEnv === "development") {
		sendErrorDev(error, res);
	} else if (config.nodeEnv === "production") {
		if (err instanceof MongooseError.CastError) {
			error = handleCastErrorDB(err);
		}

		if (isDuplicateKeyErrorDB(err)) {
			error = handleDuplicateKeyErrorDB(err);
		}

		if (err instanceof MongooseError.ValidationError) {
			error = handleValidationErrorDB(err);
		}

		sendErrorProd(error, res);
	}
};
