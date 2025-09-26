import type { Task } from "@/types/task.types";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteTaskMutation } from "../hooks/task.mutation";

interface TaskListItemProps {
	task: Task;
}

export function TaskListItem({ task }: TaskListItemProps) {
	const { _id, title } = task;

	const queryClient = useQueryClient();

	const { mutate: deleteTask, isPending: isDeleting } = useDeleteTaskMutation();

	const handleDelete = (id: Task["_id"]) => {
		deleteTask(id, {
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["tasks"] });
			},
			onError: (error) => {
				console.error(error);
			},
		});
	};

	return (
		<li>
			{title}
			<button
				type="button"
				disabled={isDeleting}
				onClick={() => handleDelete(_id)}
			>
				{isDeleting ? "Deleting..." : "Delete"}
			</button>
		</li>
	);
}
