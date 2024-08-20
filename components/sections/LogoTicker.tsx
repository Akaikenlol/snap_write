import { LogoLink } from "@/constants";
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
						<div className="flex flex-none gap-14">
							{LogoLink.map((logo, index) => (
								<Image
									key={index}
									src={logo.src}
									alt={logo.alt}
									width={100}
									height={100}
									className="h-6 w-auto"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoTicker;
