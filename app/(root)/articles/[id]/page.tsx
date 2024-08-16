import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
	return (
		<div className="home-container">
			<h1>Article Details</h1>
			<p>Article Details: {params.id}</p>
		</div>
	);
};

export default Page;
