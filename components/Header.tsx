import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all grainy">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
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
			</MaxWidthWrapper>
		</nav>
	);
};

export default Header;
