import { MoreHorizontalIcon } from "lucide-react";
import type * as React from "react";

import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface MoreActionsProps {
	tooltip?: string;
	children: React.ReactNode;
}

export function MoreActions({
	tooltip = "More actions",
	children,
}: MoreActionsProps) {
	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger asChild>
						<Button type="button" size="icon">
							<MoreHorizontalIcon />
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent side="bottom">
					<p>{tooltip}</p>
				</TooltipContent>
			</Tooltip>
			<DropdownMenuContent>{children}</DropdownMenuContent>
		</DropdownMenu>
	);
}
