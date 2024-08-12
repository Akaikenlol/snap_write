import type { Metadata } from "next";
import "./globals.css";
import { Recursive } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { dark } from "@clerk/themes";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Snap Write",
	description: "Snap Write is a blog for developers.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				variables: {
					colorPrimary: "#3371FF",
					fontSize: "16px",
				},
			}}
		>
			<html lang="en">
				<body
					className={cn(
						"min-h-screen font-sans flex items-center justify-center antialiased",
						recursive.className
					)}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
