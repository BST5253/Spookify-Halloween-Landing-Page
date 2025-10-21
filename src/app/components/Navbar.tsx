"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 flex justify-between items-center px-4 sm:px-8 py-4 text-ghost"
		>
			<div className="text-2xl sm:text-3xl text-pumpkin font-spooky">
				🎃 Spookify
			</div>

			{/* Mobile Menu Button */}
			<button
				className="md:hidden text-pumpkin text-2xl z-50"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				{isOpen ? "✕" : "☰"}
			</button>

			{/* Desktop Menu */}
			<ul className="hidden md:flex space-x-6 text-lg">
				<li>
					<a
						href="#features"
						className="hover:text-pumpkin transition-colors"
					>
						Features
					</a>
				</li>
				<li>
					<a
						href="#cta"
						className="hover:text-pumpkin transition-colors"
					>
						Buy
					</a>
				</li>
			</ul>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					className="fixed top-16 right-0 w-64 h-screen bg-black/95 backdrop-blur-lg md:hidden p-8"
				>
					<ul className="flex flex-col space-y-6 text-xl">
						<li>
							<a
								href="#features"
								className="hover:text-pumpkin transition-colors block"
								onClick={() => setIsOpen(false)}
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#cta"
								className="hover:text-pumpkin transition-colors block"
								onClick={() => setIsOpen(false)}
							>
								Buy
							</a>
						</li>
					</ul>
				</motion.div>
			)}
		</motion.nav>
	);
}
