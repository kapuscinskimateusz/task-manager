import { Button } from "@/components/ui/button";
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
			<span>{title}</span>
			<Button
				variant="destructive"
				isLoading={isDeleting}
				onClick={() => handleDelete(_id)}
			>
				Delete
			</Button>
		</li>
	);
}
