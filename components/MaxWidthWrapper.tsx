import { cn } from "@/lib/utils";
import React from "react";

interface MaxWidthWrapperProps {
	className?: string;
	children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-screen-2xl px-2.5 md:px-20",
				className
			)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
