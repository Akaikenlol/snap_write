import React from "react";
import Image from "next/image";
import { NavLink } from "@/constants";
import Link from "next/link";
import WaitButton from "../shared/WaitButton";

const Header = () => {
	return (
		<header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
			<div className="container">
				<div className="flex justify-between text-center items-center md:border border-white/15 md:p-3.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
					<div>
						<div className="border border-white/45 h-10 w-10 rounded-xl inline-flex justify-center items-center">
							<Image
								height={24}
								width={24}
								src={"/assets/logo.svg"}
								className="cursor-pointer invert"
								alt="Logo"
							/>
						</div>
					</div>
					<div className="hidden md:block">
						<nav className="flex gap-8 text-sm">
							{NavLink.map((nav) => (
								<Link
									href={nav.link}
									key={nav.title}
									className=" text-white/70 hover:text-white transition ease-in-out duration-300"
								>
									{nav.title}
								</Link>
							))}
						</nav>
					</div>
					<div className="flex gap-6 items-center">
						<WaitButton>Join Wait List</WaitButton>
						<Image
							src={"/assets/icon-menu.svg"}
							alt="MenuIcon"
							width={24}
							height={24}
							className="cursor-pointer md:hidden"
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
