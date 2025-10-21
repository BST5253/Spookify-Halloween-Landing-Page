"use client";

import { useEffect, useRef } from "react";

interface TrailPoint {
	x: number;
	y: number;
	opacity: number;
	size: number;
}

const CustomCursor = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const trailRef = useRef<HTMLCanvasElement>(null);
	const trailPoints = useRef<TrailPoint[]>([]);
	const animationFrame = useRef<number | undefined>(undefined);

	useEffect(() => {
		// Disable custom cursor on mobile/touch devices
		const isTouchDevice =
			"ontouchstart" in window || navigator.maxTouchPoints > 0;
		if (isTouchDevice) return;

		const cursor = cursorRef.current;
		const canvas = trailRef.current;
		if (!cursor || !canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Track mouse movement
		const handleMouseMove = (e: MouseEvent) => {
			// Update cursor position
			cursor.style.left = `${e.clientX}px`;
			cursor.style.top = `${e.clientY}px`;

			// Add trail point
			trailPoints.current.push({
				x: e.clientX,
				y: e.clientY,
				opacity: 1,
				size: 8,
			});

			// Limit trail length
			if (trailPoints.current.length > 20) {
				trailPoints.current.shift();
			}
		};

		// Animate trail
		const animateTrail = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw trail points
			trailPoints.current.forEach((point, index) => {
				point.opacity -= 0.05;
				point.size -= 0.3;

				if (point.opacity > 0) {
					// Create gradient
					const gradient = ctx.createRadialGradient(
						point.x,
						point.y,
						0,
						point.x,
						point.y,
						point.size
					);
					gradient.addColorStop(
						0,
						`rgba(255, 117, 24, ${point.opacity})`
					);
					gradient.addColorStop(
						0.5,
						`rgba(163, 0, 0, ${point.opacity * 0.5})`
					);
					gradient.addColorStop(1, "rgba(255, 117, 24, 0)");

					ctx.fillStyle = gradient;
					ctx.beginPath();
					ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
					ctx.fill();
				}
			});

			// Remove faded points
			trailPoints.current = trailPoints.current.filter(
				(p) => p.opacity > 0
			);

			animationFrame.current = requestAnimationFrame(animateTrail);
		};

		document.addEventListener("mousemove", handleMouseMove);
		animateTrail();

		// Handle hover states
		const handleMouseEnter = () => {
			cursor.classList.add("cursor-hover");
		};

		const handleMouseLeave = () => {
			cursor.classList.remove("cursor-hover");
		};

		// Add hover listeners to interactive elements
		const interactiveElements = document.querySelectorAll(
			"a, button, [role='button']"
		);
		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			document.removeEventListener("mousemove", handleMouseMove);
			if (animationFrame.current) {
				cancelAnimationFrame(animationFrame.current);
			}
			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}, []);

	return (
		<>
			{/* Canvas for trail effect */}
			<canvas
				ref={trailRef}
				className="fixed inset-0 pointer-events-none z-50"
				style={{ mixBlendMode: "screen" }}
			/>

			{/* Custom cursor */}
			<div
				ref={cursorRef}
				className="fixed w-8 h-8 pointer-events-none z-50 transition-transform duration-150 ease-out"
				style={{
					transform: "translate(-50%, -50%)",
					left: "-100px",
					top: "-100px",
				}}
			>
				{/* Ghost cursor */}
				<div className="relative w-full h-full">
					{/* Ghost body */}
					<div className="absolute inset-0 bg-linear-to-b from-white to-gray-300 rounded-t-full opacity-80 cursor-glow"></div>

					{/* Ghost tail */}
					<div className="absolute bottom-0 left-0 right-0 h-2 flex justify-around">
						<div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
						<div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
						<div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
					</div>

					{/* Ghost eyes */}
					<div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
					<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>

					{/* Glow effect */}
					<div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-30 animate-pulse"></div>
				</div>
			</div>

			<style jsx>{`
				.cursor-hover {
					transform: translate(-50%, -50%) scale(1.5);
				}
				.cursor-glow {
					filter: drop-shadow(0 0 10px rgba(255, 117, 24, 0.8));
				}
			`}</style>
		</>
	);
};

export default CustomCursor;
