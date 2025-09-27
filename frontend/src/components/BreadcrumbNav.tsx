import { Link, isMatch, useMatches } from "@tanstack/react-router";
import * as React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function BreadcrumbNav() {
	const matches = useMatches();

	const matchesWithCrumbs = matches.filter((match) =>
		isMatch(match, "loaderData.crumb"),
	);

	const items = matchesWithCrumbs.map(({ pathname, loaderData }) => {
		return { href: pathname, label: loaderData?.crumb };
	});

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.map(({ href, label }, index) => (
					<React.Fragment key={href}>
						{index > 0 && <BreadcrumbSeparator />}
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link to={href}>{label}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
