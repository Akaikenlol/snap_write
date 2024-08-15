import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const Home = async () => {
	const clerkUser = await currentUser();
	if (!clerkUser) {
		redirect("/sign-in");
	}
	return (
		<MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
			<main className="home-container"></main>
		</MaxWidthWrapper>
	);
};

export default Home;
