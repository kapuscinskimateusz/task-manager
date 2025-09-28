import type { Status } from "@/types/statuses.types";

const all = ["statuses"] as const;

export const statusesKeys = {
	all,
	list: () => [...all, "list"] as const,
	detail: (id: Status["_id"]) => [...all, "detail", id] as const,
};
