import React from "react";
import { tabs } from "@/constants";
import Image from "next/image";

const Features = () => {
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
						<div
							key={index}
							className="border border-white/25 bg-black glass-container flex p-2.5 rounded-xl gap-2.5 items-center text-center lg:flex-1"
						>
							<div className="h-12 w-12 border border-white/30 bg-black rounded-xl inline-flex items-center justify-center">
								<Image
									src={tab.icon}
									alt={tab.title}
									width={24}
									height={24}
									className="cursor-pointer invert"
								/>
							</div>
							<div className="font-medium">{tab.title}</div>
							{tab.isNew && (
								<div className="text-sm rounded-xl px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
									New
								</div>
							)}
						</div>
					))}
				</div>
				<div className="border border-white/15 rounded-xl mt-7 glass-container">
					<Image
						src={"/assets/product-image.png"}
						alt="Product Image"
						width={2200}
						height={1848}
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
