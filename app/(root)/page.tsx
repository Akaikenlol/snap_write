import Header from "@/components/Header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
	const clerkUser = await currentUser();
	if (!clerkUser) {
		redirect("/sign-in");
	}
	return (
		<main className="home-container">
			<Header className="sticky top-0 left-0">
				<div className="flex items-center gap-2 lg:gap-4">
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</Header>
		</main>
	);
};

export default Home;
