import { Task } from "../models/taskModel";
import handlerFactory from "../utils/handlerFactory";

const getTasks = handlerFactory.getAll(Task);
const getTask = handlerFactory.getOne(Task);
const createTask = handlerFactory.createOne(Task);
const updateTask = handlerFactory.updateOne(Task);
const deleteTask = handlerFactory.deleteOne(Task);

export default { getTasks, getTask, createTask, updateTask, deleteTask };
