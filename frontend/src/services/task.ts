import type { Task } from "@/types/task";
import { api } from "./api";

const fetchTasks = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const res = await api.get<Task[]>("/tasks");
	return res.data;
};

export default { fetchTasks };
