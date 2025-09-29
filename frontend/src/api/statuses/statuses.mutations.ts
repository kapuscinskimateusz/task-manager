import { useMutation } from "@tanstack/react-query";

import statusesService from "@/services/statuses.service";
import type { CreateStatusPayload, Status } from "@/types/statuses.types";

export const useCreateStatusMutation = () =>
	useMutation({
		mutationFn: (payload: CreateStatusPayload) =>
			statusesService.createStatus(payload),
	});

export const useDeleteStatusMutation = () =>
	useMutation({
		mutationFn: (id: Status["_id"]) => statusesService.deleteStatus(id),
	});
