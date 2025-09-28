import { useMutation } from "@tanstack/react-query";

import tasksService from "@/services/tasks.service";
import type { Task } from "@/types/tasks.types";

export const useDeleteTaskMutation = () =>
	useMutation({
		mutationFn: (id: Task["_id"]) => tasksService.deleteTask(id),
	});
