import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { NavLink } from "@/constants";
import Link from "next/link";

const Header = () => {
	return (
		<header className="py-4 border-b border-white/15 md:border-none">
			<div className="container">
				<div className="flex justify-between text-center items-center md:border border-white/15 md:p-3.5 rounded-xl max-w-2xl mx-auto">
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
						<Button className="relative py-2 px-3 rounded-xl font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
							<div className="absolute inset-0">
								<div className="rounded-xl border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
								<div className="rounded-xl border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
								<div className="absolute rounded-xl inset-0 shadow-[0px_0px_12px_#8c45ff]" />
							</div>
							<span>Join Wait List</span>
						</Button>
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
