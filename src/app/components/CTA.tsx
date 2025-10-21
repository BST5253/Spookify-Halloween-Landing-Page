"use client";
import { motion } from "framer-motion";

export default function CTA() {
	return (
		<section
			id="cta"
			className="relative text-center py-12 sm:py-16 md:py-24 bg-linear-to-b from-black/60 to-midnight z-20 px-4"
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-pumpkin spooky-text px-4"
			>
				Pre-order Before the Full Moon 🌕
			</motion.h2>
			<motion.a
				whileHover={{ scale: 1.1, y: -5 }}
				whileTap={{ scale: 0.95 }}
				href="#"
				className="btn inline-block bg-pumpkin text-midnight font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-pumpkin/50 transition-all duration-300 pumpkin-glow text-sm sm:text-base relative overflow-hidden z-10"
				style={{
					textShadow: "0 1px 2px rgba(0,0,0,0.3)",
					boxShadow:
						"0 0 20px rgba(255, 117, 24, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3)",
				}}
			>
				<span className="relative z-10 drop-shadow-sm">
					Get the Kit Now 🎃
				</span>
			</motion.a>
		</section>
	);
}
