import type { Task } from "@/types/tasks.types";

const all = ["tasks"] as const;

export const tasksKeys = {
	all,
	list: () => [...all, "list"] as const,
	detail: (id: Task["_id"]) => [...all, "detail", id],
};
