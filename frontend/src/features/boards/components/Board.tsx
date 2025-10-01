import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";

import {
	getStatusesQueryOptions,
	statusesKeys,
	useCreateStatusMutation,
	useDeleteStatusMutation,
} from "@/api/statuses";
import { Button } from "@/components/ui/button";
import type { CreateStatusPayload, Status } from "@/types/statuses.types";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Column } from "./Column";

export function Board() {
	const queryClient = useQueryClient();

	const { data: statuses } = useSuspenseQuery(getStatusesQueryOptions());

	const { mutate: createStatus, isPending: isStatusCreating } =
		useCreateStatusMutation();

	const { mutate: deleteStatus, isPending: isStatusDeleting } =
		useDeleteStatusMutation();

	const handleCreateStatus = () => {
		// TODO - temporary solution
		const title = prompt("Enter title:");

		if (!title) return;

		const payload: CreateStatusPayload = {
			title,
			order: statuses.length + 1,
		};

		createStatus(payload, {
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: statusesKeys.list() });
			},
		});
	};

	const handleDeleteStatus = (id: Status["_id"]) => {
		deleteStatus(id, {
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: statusesKeys.list() });
			},
		});
	};

	return (
		<ScrollArea className="h-full">
			<div className="flex gap-4">
				{statuses.map((status) => (
					<Column
						key={status._id}
						status={status}
						onDelete={handleDeleteStatus}
						className="flex-[0_0_270px]"
					/>
				))}
				<Button
					type="button"
					size="icon"
					isLoading={isStatusCreating}
					onClick={handleCreateStatus}
				>
					<PlusIcon />
				</Button>
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
}
