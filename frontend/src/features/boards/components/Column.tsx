import type { Status } from "@/types/statuses.types";

interface ColumnProps {
	status: Status;
}

export function Column({ status }: ColumnProps) {
	return <div>{status.title}</div>;
}
