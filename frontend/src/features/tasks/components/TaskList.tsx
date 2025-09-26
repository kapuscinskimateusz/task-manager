import type { Task } from "@/types/task.types";
import { TaskListItem } from "./TaskListItem";

interface TaskListProps {
	tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
	return (
		<ul>
			{tasks.map((task) => (
				<TaskListItem key={task._id} task={task} />
			))}
		</ul>
	);
}
