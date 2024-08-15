import { Link } from "lucide-react";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
	return (
		<div className="text-14-regular mt-20 flex items-center text-center h-14 inset-x-0 z-30 w-full border-t border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<p className="justify-items-end text-dark-200 xl:text-left">
					© {new Date().getFullYear()} CarePulse
				</p>
			</MaxWidthWrapper>
		</div>
	);
};

export default Footer;
