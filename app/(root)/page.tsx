import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getArticles } from "@/lib/actions/articles.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const Home = async ({ params }: { params: { id: string } }) => {
	const clerkUser = await currentUser();
	const articles = await getArticles(params.id);
	if (!clerkUser) {
		redirect("/sign-in");
	}

	return (
		<MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
			<main className="home-container">
				<h1>New Arrivals</h1>
				<ul className="flex flex-col gap-3">
					{articles.map((article) => (
						<li key={article.id}>{article.title}</li>
					))}
				</ul>
			</main>
		</MaxWidthWrapper>
	);
};

export default Home;
