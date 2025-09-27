import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks")({
	loader: () => ({ crumb: "Tasks" }),
	component: Outlet,
});
