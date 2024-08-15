import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col h-screen">
			<main className="flex-1">
				<Header />
				{children}
				<Footer />
			</main>
		</div>
	);
}
