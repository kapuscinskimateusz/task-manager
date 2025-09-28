import { queryOptions } from "@tanstack/react-query";

import statusesService from "@/services/statuses.service";
import { statusesKeys } from "./statuses.keys";

export const getStatusesQueryOptions = () =>
	queryOptions({
		queryKey: statusesKeys.list(),
		queryFn: () => statusesService.getStatuses(),
	});
