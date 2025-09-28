import statusesService from "@/services/statuses.service";
import type { CreateStatusPayload } from "@/types/statuses.types";
import { useMutation } from "@tanstack/react-query";

export const useCreateStatusMutation = () =>
	useMutation({
		mutationFn: (payload: CreateStatusPayload) =>
			statusesService.createStatus(payload),
	});
