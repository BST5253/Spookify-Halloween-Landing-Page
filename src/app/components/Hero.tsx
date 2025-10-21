"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
	const ghostRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (ghostRef.current) {
			gsap.to(ghostRef.current, {
				y: 20,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
				duration: 2,
			});
		}
	}, []);

	return (
		<section
			id="hero"
			className="relative bg-[url('/assets/hero-bg.webp')] bg-cover bg-center h-screen text-center overflow-hidden z-10 flex flex-col items-center justify-center px-4"
		>
			<img
				ref={ghostRef}
				src="/assets/ghost-float.png"
				alt="Floating Ghost"
				className="absolute top-10 right-4 w-16 sm:top-20 sm:right-20 sm:w-24 drop-shadow-lg z-20"
			/>
			<motion.h1
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1 }}
				className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-glow text-pumpkin relative z-20"
			>
				Spookify
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-ghost relative z-20 px-4 max-w-2xl"
			>
				Transform your home into a haunted haven 👻
			</motion.p>
		</section>
	);
}
