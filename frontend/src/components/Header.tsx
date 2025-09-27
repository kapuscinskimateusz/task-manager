import { Link } from "@tanstack/react-router";

export function Header() {
	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/tasks">Tasks</Link>
				</div>
				<div className="px-2 font-bold">
					<Link to="/tasks/new">Add New Task</Link>
				</div>
			</nav>
		</header>
	);
}
