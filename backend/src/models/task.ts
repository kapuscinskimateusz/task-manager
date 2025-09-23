export interface Task {
	id: number;
	title: string;
	description: string;
	status: "todo" | "in-progress" | "done";
	createdAt: Date;
}

export const tasks: Task[] = [
	{
		id: 1,
		title: "Pierwsze zadanie",
		description: "Opis zadania 1",
		status: "todo",
		createdAt: new Date(),
	},
	{
		id: 2,
		title: "Drugie zadanie",
		description: "Opis zadania 2",
		status: "in-progress",
		createdAt: new Date(),
	},
];
