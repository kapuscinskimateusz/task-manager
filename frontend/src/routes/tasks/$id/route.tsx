import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$id")({
	loader: ({ params }) => ({ crumb: params.id }),
	component: Outlet,
});
