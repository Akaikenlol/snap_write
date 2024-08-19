import React from "react";
import { Button } from "../ui/button";

const WaitButton = (props: React.PropsWithChildren) => {
	return (
		<Button className="relative py-2 px-3 rounded-xl font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
			<div className="absolute inset-0">
				<div className="rounded-xl border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
				<div className="rounded-xl border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
				<div className="absolute rounded-xl inset-0 shadow-[0px_0px_12px_#8c45ff]" />
			</div>
			<span>{props.children}</span>
		</Button>
	);
};

export default WaitButton;
