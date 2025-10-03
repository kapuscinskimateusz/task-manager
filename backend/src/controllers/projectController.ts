import { Project } from "../models/projectModel";
import handlerFactory from "../utils/handlerFactory";

const getProjects = handlerFactory.getAll(Project);
const getProject = handlerFactory.getOne(Project);
const createProject = handlerFactory.createOne(Project);

export default {
	getProjects,
	getProject,
	createProject,
};
