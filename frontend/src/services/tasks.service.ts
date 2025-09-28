import { api } from "@/lib/axios";
import type { Task } from "@/types/tasks.types";

const getTasks = async () => {
	const res = await api.get<Task[]>("/tasks");
	return res.data;
};

const deleteTask = async (id: Task["_id"]) => {
	const res = await api.delete<void>(`/tasks/${id}`);
	return res.data;
};

export default { getTasks, deleteTask };
