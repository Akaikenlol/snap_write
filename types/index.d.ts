declare type Article = {
	id: number;
	title: string;
	content: string;
	id: string;
	createdAt?: string;
	updatedAt?: string;
};

declare type Comment = {
	id: number;
	body: string;
	articleId: number;
	createdAt: string;
	updatedAt: string;
	author: Author;
};

declare type Author = {
	name: string;
	id: string;
	email: string;
	avatar: string;
	color: string;
};
