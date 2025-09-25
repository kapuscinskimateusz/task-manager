import { tasksQueryOptions } from "@/api/tasksQueryOptions";
import type { Task } from "@/types/task";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: ({ context: { queryClient } }) =>
		queryClient.ensureQueryData(tasksQueryOptions()),
	component: App,
});

function App() {
	const { data: tasks } = useSuspenseQuery(tasksQueryOptions());

	return (
		<div>
			<TaskList tasks={tasks} />
		</div>
	);
}

function TaskList({ tasks }: { tasks: Task[] }) {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task._id}>{task.title}</li>
			))}
		</ul>
	);
}
