"use client";

import { LogoLink } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LogoTicker = () => {
	return (
		<section className="py-20 md:py-24">
			<div className="container">
				<div className="flex items-center text-center gap-5">
					<div className="flex-1 md:flex-none">
						<h2>Trusted by a top innovative teams</h2>
					</div>
					<div className="flx-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
						<motion.div
							initial={{ translateX: "-100%" }}
							animate={{ translateX: "25%" }}
							transition={{
								repeat: Infinity,
								duration: 30,
								ease: "linear",
							}}
							className="flex flex-none gap-14 pr-14 -translate-x-1/4"
						>
							{[...LogoLink, ...LogoLink].map((logo, index) => (
								<Image
									key={index}
									src={logo.src}
									alt={logo.alt}
									width={100}
									height={100}
									className="h-6 w-auto"
								/>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoTicker;
