import { TaskList } from "@/features/tasks/components/TaskList";
import { tasksQueryOptions } from "@/features/tasks/hooks/task.query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/")({
	loader: ({ context: { queryClient } }) =>
		queryClient.ensureQueryData(tasksQueryOptions()),
	component: RouteComponent,
});

function RouteComponent() {
	const { data: tasks } = useSuspenseQuery(tasksQueryOptions());

	return (
		<div>
			<TaskList tasks={tasks} />
		</div>
	);
}
