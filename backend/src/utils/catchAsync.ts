import type { NextFunction, Request, RequestHandler, Response } from "express";

type AsyncHandler = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;

export const catchAsync = (fn: AsyncHandler): RequestHandler => {
	return (req, res, next) => {
		fn(req, res, next).catch(next);
	};
};
