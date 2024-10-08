import CallToAction from "@/components/sections/CallToAction";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Testimonials from "@/components/sections/Testimonials";
import React from "react";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<LogoTicker />
			<Features />
			<Testimonials />
			<CallToAction />
			<Footer />
		</>
	);
};

export default Home;
