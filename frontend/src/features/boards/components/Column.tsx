import { MoreActions } from "@/components/MoreActions";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Status } from "@/types/statuses.types";
import { PlusIcon } from "lucide-react";

interface ColumnProps {
	status: Status;
	onDelete: (id: Status["_id"]) => void;
}

export function Column({ status, onDelete }: ColumnProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{status.title}</CardTitle>
				<CardAction>
					<MoreActions>
						<DropdownMenuItem>Move column left</DropdownMenuItem>
						<DropdownMenuItem>Move column right</DropdownMenuItem>
						<DropdownMenuItem>Set column limit</DropdownMenuItem>
						<DropdownMenuItem onClick={() => onDelete(status._id)}>
							Delete
						</DropdownMenuItem>
					</MoreActions>
				</CardAction>
			</CardHeader>
			<CardContent>
				<Button type="button">
					<PlusIcon />
					Create
				</Button>
			</CardContent>
		</Card>
	);
}
