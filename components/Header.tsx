import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = async () => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link
						href={"/"}
						className="flex items-center text-center z-40 md:flex-1"
					>
						{/* TO DO: Responsive Navbar */}
						<Image
							src={"/assets/icons/logo_2.svg"}
							alt="Logo"
							width={65}
							height={65}
							className="hidden md:block"
						/>
						<Image
							src={"/assets/icons/logo_2.svg"}
							alt="Logo"
							width={65}
							height={65}
							className="mr-2 md:hidden"
						/>

						<span className="header-box-title text-lg lg:text-xl hidden md:block">
							Snap Write
						</span>
					</Link>
					<div className="flex gap-6">
						<Button className="bg-teal-500 rounded-xl text-center">
							<Link href={"/articles"} className="text-white">
								Create Article
							</Link>
						</Button>
						<div className="hidden items-center space-x-4 sm:flex">
							<SignedIn>
								<UserButton />
							</SignedIn>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Header;
