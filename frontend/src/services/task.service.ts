import { api } from "@/lib/axios/api.client";
import type { Task } from "@/types/task.types";

const fetchTasks = async () => {
	const res = await api.get<Task[]>("/tasks");
	return res.data;
};

const deleteTask = async (id: Task["_id"]) => {
	const res = await api.delete<void>(`/tasks/${id}`);
	return res.data;
};

export default { fetchTasks, deleteTask };
