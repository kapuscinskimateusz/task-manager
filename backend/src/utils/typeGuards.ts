import type { MongoServerError } from "mongodb";

export const isDuplicateKeyErrorDB = (err: unknown): err is MongoServerError =>
	(err as MongoServerError).code === 11000;
