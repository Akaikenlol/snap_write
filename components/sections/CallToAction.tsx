"use client";

import React, { RefObject, useEffect, useRef } from "react";
import WaitButton from "../shared/WaitButton";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const updateMousePosition = (e: MouseEvent) => {
		if (!to.current) return;
		const { top, left } = to.current.getBoundingClientRect();

		mouseX.set(e.x - left);
		mouseY.set(e.y - top);
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return [mouseX, mouseY];
};

const CallToAction = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const borderDivRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const backgroundPositionY = useTransform(
		scrollYProgress,
		[0, 1],
		[-300, 300]
	);

	const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

	const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

	return (
		<section className="py-20 md:py-24 " ref={sectionRef}>
			<div className="container">
				<motion.div
					ref={borderDivRef}
					className="border border-white/15 py-24  bg-black rounded-xl overflow-hidden relative group"
					animate={{
						backgroundPositionX: 800,
					}}
					transition={{
						repeat: Infinity,
						duration: 60,
						ease: "linear",
					}}
					style={{
						backgroundPositionY,
						backgroundImage: `url("/assets/stars.png")`,
					}}
				>
					<div
						className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-1000"
						style={{
							backgroundImage: `url("/assets/grid-lines.png")`,
						}}
					/>
					<motion.div
						className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-1000"
						style={{
							maskImage,
							backgroundImage: `url("/assets/grid-lines.png")`,
						}}
					/>
					<div className="relative">
						<h2 className="text-5xl md:text-6xl max-w-md mx-auto tracking-tight text-center font-medium">
							AI-driven SEO for everyone.
						</h2>
						<p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
							Achieve clear, impactful results without the complexity.
						</p>
						<div className="flex justify-center mt-8">
							<WaitButton>Join Wait List</WaitButton>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CallToAction;
