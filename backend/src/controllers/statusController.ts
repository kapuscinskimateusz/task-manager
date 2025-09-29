import { Status } from "../models/statusModel";
import handlerFactory from "../utils/handlerFactory";

const getStatuses = handlerFactory.getAll(Status);
const getStatus = handlerFactory.getOne(Status);
const createStatus = handlerFactory.createOne(Status);
const updateStatus = handlerFactory.updateOne(Status);
const deleteStatus = handlerFactory.deleteOne(Status);

export default {
	getStatuses,
	getStatus,
	createStatus,
	updateStatus,
	deleteStatus,
};
