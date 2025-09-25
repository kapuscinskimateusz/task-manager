import taskService from "@/services/task";
import type { Task } from "@/types/task";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { data: tasks, isLoading } = useQuery({
		queryKey: ["tasks"],
		queryFn: taskService.fetchTasks,
	});

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<TaskList tasks={tasks ?? []} />
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
