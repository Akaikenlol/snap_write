import { testimonials } from "@/constants";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
	return (
		<section className="py-20 md:py-24">
			<div className="container">
				<h2 className="text-5xl md:text-6xl font-medium text-center tracking-tight">
					Beyond Expectations.
				</h2>
				<p className="text-white/70 text-lg md:text-xl max-w-sm mx-auto tracking-tight text-center mt-5">
					Our revolution AI SEO tools have transformed our clients strategies.
				</p>
				<div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
					<div className="flex gap-5">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
							>
								<div className="text-lg md:text-2xl tracking-tight">
									{testimonial.text}
								</div>
								<div className="flex items-center gap-3 mt-5">
									<div className="relative after:rounded-full after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light  before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-full">
										<Image
											src={testimonial.avatarImg}
											width={88}
											height={88}
											className="object-contain h-11 w-11 grayscale rounded-full border border-white/30"
											alt={`Avatar for ${testimonial.name}`}
										/>
									</div>
									<div>
										<div>{testimonial.name}</div>
										<div className="text-white/50 text-sm">
											{testimonial.title}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
