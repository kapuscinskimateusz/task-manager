import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$id/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/tasks/$id/"!</div>;
}
