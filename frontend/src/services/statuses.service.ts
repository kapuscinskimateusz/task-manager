import { api } from "@/lib/axios";
import type { CreateStatusPayload, Status } from "@/types/statuses.types";

const getStatuses = async () => {
	const res = await api.get<Status[]>("/statuses");
	return res.data;
};

const createStatus = async (payload: CreateStatusPayload) => {
	const res = await api.post<Status>("/statuses", payload);
	return res.data;
};

export default { getStatuses, createStatus };
