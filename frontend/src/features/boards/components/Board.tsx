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

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

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
		<Carousel opts={{ slidesToScroll: "auto" }}>
			<CarouselContent>
				{statuses.map((status) => (
					<CarouselItem key={status._id} className="flex-[0_0_20%]">
						<Column status={status} onDelete={handleDeleteStatus} />
					</CarouselItem>
				))}
				<CarouselItem className="flex-none">
					<Button
						type="button"
						size="icon"
						isLoading={isStatusCreating}
						onClick={handleCreateStatus}
					>
						<PlusIcon />
					</Button>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
