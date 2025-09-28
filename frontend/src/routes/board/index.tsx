import { createFileRoute } from "@tanstack/react-router";

import { getStatusesQueryOptions } from "@/api/statuses";
import { getTasksQueryOptions } from "@/api/tasks";
import { BoardPage } from "@/pages/board.page";

export const Route = createFileRoute("/board/")({
	loader: async ({ context: { queryClient } }) => {
		const [tasks, statuses] = await Promise.all([
			queryClient.ensureQueryData(getTasksQueryOptions()),
			queryClient.ensureQueryData(getStatusesQueryOptions()),
		]);

		return { tasks, statuses };
	},
	component: BoardPage,
});
