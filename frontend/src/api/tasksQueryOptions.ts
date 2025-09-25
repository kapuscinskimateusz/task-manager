import taskService from "@/services/task";
import { queryOptions } from "@tanstack/react-query";

export const tasksQueryOptions = () =>
	queryOptions({
		queryKey: ["tasks"],
		queryFn: () => taskService.fetchTasks(),
	});
