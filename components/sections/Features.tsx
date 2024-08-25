"use client";

import React, {
	ComponentPropsWithRef,
	useEffect,
	useRef,
	useState,
} from "react";
import { tabs } from "@/constants";
import Image from "next/image";
import {
	animate,
	motion,
	useMotionTemplate,
	useMotionValue,
	ValueAnimationTransition,
} from "framer-motion";

const FeatureTab = (
	props: (typeof tabs)[number] &
		ComponentPropsWithRef<"div"> & { selected: boolean }
) => {
	const tabRef = useRef<HTMLDivElement>(null);
	const dotLottieRef = useRef(null);

	const xPercentage = useMotionValue(0);
	const yPercentage = useMotionValue(0);

	const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

	useEffect(() => {
		if (!tabRef.current || !props.selected) return;

		xPercentage.set(0);
		yPercentage.set(0);

		const { height, width } = tabRef.current?.getBoundingClientRect();
		const circumference = height * 2 + width * 2;

		const times = [
			0,
			width / circumference,
			(width + height) / circumference,
			(width * 2 + height) / circumference,
			1,
		];

		const option: ValueAnimationTransition = {
			times,
			duration: 4,
			repeat: Infinity,
			ease: "linear",
			repeatType: "loop",
		};
		animate(xPercentage, [0, 100, 100, 0, 0], option);
		animate(yPercentage, [0, 0, 100, 100, 0], option);
	}, [props.selected]);
	return (
		<div
			ref={tabRef}
			onClick={props.onClick}
			className="border border-white/25 bg-black glass-container flex p-2.5 rounded-xl gap-2.5 items-center text-center lg:flex-1 relative"
		>
			{props.selected && (
				<motion.div
					style={{
						maskImage,
					}}
					className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
				/>
			)}

			<motion.div
				whileHover={{
					scale: 1.05,
					boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
				}}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 300 }}
				className="h-12 w-12 border border-white/30 bg-black rounded-xl inline-flex items-center justify-center"
			>
				<Image
					ref={dotLottieRef}
					src={props.icon}
					alt={props.title}
					width={24}
					height={24}
					className="cursor-pointer invert"
				/>
			</motion.div>
			<div className="font-sm">{props.title}</div>
			{props.isNew && (
				<div className="text-sm rounded-xl px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
					New
				</div>
			)}
		</div>
	);
};

const Features = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
	const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
	const backgroundSizeX = useMotionValue(tabs[0].backgroundSizedX);

	const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
	const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

	const handleSelectTab = (index: number) => {
		setSelectedTab(index);

		const animateOptions: ValueAnimationTransition = {
			duration: 2,
			ease: "easeInOut",
		};

		animate(
			backgroundSizeX,
			[backgroundSizeX.get(), 100, tabs[index].backgroundSizedX],
			animateOptions
		);
		animate(
			backgroundPositionX,
			[backgroundPositionX.get(), tabs[index].backgroundPositionX],
			animateOptions
		);

		animate(
			backgroundPositionY,
			[backgroundPositionY.get(), tabs[index].backgroundPositionY],
			animateOptions
		);
	};

	return (
		<section className="py-20 md:py-24">
			<div className="container">
				<h2 className="text-5xl md:text-6xl font-medium text-center tracking-tight">
					Elevate your SEO efforts.
				</h2>
				<p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
					From small startups to large enterprise, our AI-driven tool has
					revolutionized the way businesses approach SEO.
				</p>
				<div className="mt-10 flex flex-col lg:flex-row gap-7">
					{tabs.map((tab, index) => (
						<FeatureTab
							key={index}
							selected={selectedTab === index}
							{...tab}
							onClick={() => handleSelectTab(index)}
						/>
					))}
				</div>
				<div className="border border-white/15 rounded-xl mt-7 glass-container">
					<motion.div
						style={{
							backgroundPosition,
							backgroundSize,
							backgroundImage: `url("/assets/product-image.png")`,
						}}
						className="aspect-video bg-cover border border-white/20 rounded-lg"
					>
						{/* <Image
							src={"/assets/product-image.png"}
							alt="Product Image"
							width={2200}
							height={1848}
						/> */}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Features;
