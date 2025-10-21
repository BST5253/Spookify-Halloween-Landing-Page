import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ParticleSystem from "./components/ParticleSystem";
import CustomCursor from "./components/CustomCursor";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
	return (
		<>
			<ParticleSystem />
			<CustomCursor />
			<ScrollAnimations />
			<Navbar />
			<Hero />
			<Features />
			<CTA />
			<Footer />
		</>
	);
}
