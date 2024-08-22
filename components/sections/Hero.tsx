"use client";

import React, { useRef } from "react";
import WaitButton from "../shared/WaitButton";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";

const Hero = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// useMotionValueEvent(scrollYProgress, "change", (value) =>
	// 	console.log("scrollYProgress", value)
	// );

	const backgroundPositionY = useTransform(
		scrollYProgress,
		[0, 1],
		[-300, 300]
	);

	return (
		<motion.section
			ref={sectionRef}
			className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
			style={{
				backgroundImage: `url("/assets/stars.png")`,
				backgroundPositionY,
			}}
			animate={{
				backgroundPositionX: 800,
			}}
			transition={{
				repeat: Infinity,
				ease: "linear",
				duration: 120,
			}}
		>
			<div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
			{/* Start Planet */}
			<div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
			{/* End Planet */}
			{/* Start Ring 1 */}
			<motion.div
				style={{
					translateX: "-50%",
					translateY: "-50%",
				}}
				animate={{
					rotate: "1turn",
				}}
				transition={{
					repeat: Infinity,
					duration: 70,
					ease: "linear",
				}}
				className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				<div className="absolute h-2 w-2 left-0 top-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
				<div className="absolute h-2 w-2 left-1/2 top-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
				<div className="absolute h-5 w-5 left-full top-1/2 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
					<div className="h-2 w-2 bg-white rounded-full" />
				</div>
			</motion.div>
			{/* End Ring 1 */}
			{/* Start Ring 2 */}
			<motion.div
				style={{
					translateY: "-50%",
					translateX: "-50%",
				}}
				animate={{
					rotate: "-1turn",
				}}
				transition={{
					repeat: Infinity,
					duration: 90,
					ease: "linear",
				}}
				className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
			></motion.div>
			{/* End Ring 2 */}
			{/* Start Ring 3 */}
			<motion.div
				style={{
					translateY: "-50%",
					translateX: "-50%",
				}}
				animate={{
					rotate: "1turn",
				}}
				transition={{
					repeat: Infinity,
					duration: 90,
					ease: "linear",
				}}
				className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
			>
				<div className="absolute h-2 w-2 left-0 top-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
				<div className="absolute h-2 w-2 left-full top-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
			</motion.div>
			{/* End Ring 3 */}
			<div className="container relative mt-32">
				<h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
					AI SEO
				</h1>
				<p className="text-lg md:text-xl max-w-xl mx-auto text-white/60 mt-5 text-center">
					Elevate your site's visibility effortlessly with AI, where smart
					technology meets user-friendly SEO tools.
				</p>
				<div className="flex justify-center mt-5">
					<WaitButton>Join Wait List</WaitButton>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
