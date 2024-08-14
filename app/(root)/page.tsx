import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import React from "react";

const Home = async () => {
	return (
		<MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
			<main className="home-container"></main>
		</MaxWidthWrapper>
	);
};

export default Home;
