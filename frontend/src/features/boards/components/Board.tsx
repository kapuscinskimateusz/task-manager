import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

import {
	getStatusesQueryOptions,
	statusesKeys,
	useCreateStatusMutation,
} from "@/api/statuses";
import type { CreateStatusPayload } from "@/types/statuses.types";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Column } from "./Column";

export function Board() {
	const queryClient = useQueryClient();

	const { data: statuses } = useSuspenseQuery(getStatusesQueryOptions());

	const { mutate: createStatus, isPending: isStatusCreating } =
		useCreateStatusMutation();

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
			onError: (error) => {
				console.error(error);
			},
		});
	};

	return (
		<div
			className="grid"
			style={{
				gridTemplateColumns: `repeat(${statuses.length}, minmax(0, 1fr)) auto`,
			}}
		>
			{statuses.map((status) => (
				<Column key={status._id} status={status} />
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
	);
}
