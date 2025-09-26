import taskService from "@/services/task.service";
import type { Task } from "@/types/task.types";
import { useMutation } from "@tanstack/react-query";

export const useDeleteTaskMutation = () => {
	return useMutation({
		mutationFn: (id: Task["_id"]) => taskService.deleteTask(id),
	});
};
