import { footerLogo, NavLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="py-5 border-t border-white/15">
			<div className="container">
				<div className="flex flex-col lg:flex-row lg:items-center gap-8">
					<div className="flex gap-2 items-center lg:flex-1">
						<Image
							src={"/assets/logo.svg"}
							alt="Logo"
							width={24}
							height={24}
							className="cursor-pointer invert"
						/>
						<h2 className="font-medium">AI Startup Landing Page</h2>
					</div>

					<nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
						{NavLink.map((nav) => (
							<Link
								href={nav.link}
								key={nav.title}
								className=" text-white/70 hover:text-white text-xs md:text-sm transition ease-in-out duration-300"
							>
								{nav.title}
							</Link>
						))}
					</nav>
					<div className="flex gap-5 lg:flex-1 lg:justify-end">
						{footerLogo.map((logo) => (
							<Image
								src={logo.src}
								alt={logo.alt}
								key={logo.alt}
								width={24}
								height={24}
								className="cursor-pointer invert"
							/>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
