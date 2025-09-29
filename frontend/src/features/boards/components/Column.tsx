import { MoreActions } from "@/components/MoreActions";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Status } from "@/types/statuses.types";

interface ColumnProps {
	status: Status;
	onDelete: (id: Status["_id"]) => void;
}

export function Column({ status, onDelete }: ColumnProps) {
	return (
		<div>
			<div>
				<span>{status.title}</span>
				<MoreActions>
					<DropdownMenuItem>Move column left</DropdownMenuItem>
					<DropdownMenuItem>Move column right</DropdownMenuItem>
					<DropdownMenuItem>Set column limit</DropdownMenuItem>
					<DropdownMenuItem onClick={() => onDelete(status._id)}>
						Delete
					</DropdownMenuItem>
				</MoreActions>
			</div>
		</div>
	);
}
