"use server";

export const getArticles = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/articles/${id}`);

		if (!res.ok) {
			// Log the response status and text for debugging
			const errorText = await res.text();
			console.error(`Error fetching articles: ${res.status} ${res.statusText}`);
			console.error(`Response text: ${errorText}`);
		}

		const data = await res.json();
		return data.articles as Article[];
	} catch (error) {
		console.error("Error in getArticles:", error);
		throw error;
	}
};
