import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
	return (
		<div className={cn("header", className)}>
			<Link href={"/"} className="md:flex-1">
				<Image
					src={"/assets/icons/logo_2.svg"}
					alt="Logo"
					width={65}
					height={65}
					className="hidden md:block"
				/>
				<Image
					src={"/assets/icons/logo_2.svg"}
					alt="Logo"
					width={65}
					height={65}
					className="mr-2 md:hidden"
				/>
			</Link>
			{children}
		</div>
	);
};

export default Header;
