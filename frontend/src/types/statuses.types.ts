export interface Status {
	_id: string;
	title: string;
	order: number;
}

export type CreateStatusPayload = Omit<Status, "_id">;
