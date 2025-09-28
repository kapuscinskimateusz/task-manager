import { queryOptions } from "@tanstack/react-query";

import taskService from "@/services/tasks.service";
import { tasksKeys } from "./tasks.keys";

export const getTasksQueryOptions = () =>
	queryOptions({
		queryKey: tasksKeys.list(),
		queryFn: () => taskService.getTasks(),
	});
