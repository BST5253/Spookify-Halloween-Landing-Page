"use client";
import { motion } from "framer-motion";

interface FeatureItem {
	title: string;
	img: string;
}

const items: FeatureItem[] = [
	{ title: "Pumpkin Lanterns", img: "/assets/pumpkin-decor.webp" },
	{ title: "Haunted Candles", img: "/assets/candle.webp" },
	{ title: "Ghost Lanterns", img: "/assets/lantern.webp" },
];

export default function Features() {
	return (
		<section
			id="features"
			className="relative py-12 sm:py-16 md:py-24 bg-black/40 z-20 px-4"
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 text-pumpkin px-4"
			>
				What&apos;s Inside the Kit 🎁
			</motion.h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
				{items.map((item, i) => (
					<div
						key={i}
						className="feature-card card-hover rounded-2xl overflow-hidden bg-midnight/70 p-3 sm:p-4 border border-pumpkin/50 shadow-lg"
					>
						<img
							src={item.img}
							alt={item.title}
							className="rounded-lg mb-3 sm:mb-4 w-full h-48 sm:h-56 md:h-64 object-cover"
						/>
						<h3 className="text-xl sm:text-2xl text-center text-ghost">
							{item.title}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
}
