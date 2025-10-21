"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const ScrollAnimations = () => {
	useEffect(() => {
		// Set initial visibility for feature cards to ensure they're visible
		gsap.set(".feature-card", { opacity: 1, y: 0, scale: 1, rotationX: 0 });

		// Parallax effect for hero section (reduced movement to prevent overflow)
		gsap.to("#hero", {
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
			y: 100,
			opacity: 0.5,
		});

		// Features reveal with stagger
		gsap.fromTo(
			".feature-card",
			{
				y: 100,
				opacity: 0,
				scale: 0.8,
				rotationX: 45,
			},
			{
				scrollTrigger: {
					trigger: "#features",
					start: "top 80%",
					toggleActions: "play none none none",
					once: true,
				},
				y: 0,
				opacity: 1,
				scale: 1,
				rotationX: 0,
				stagger: 0.2,
				duration: 1,
				ease: "power3.out",
			}
		);

		// CTA section scale and glow effect
		gsap.from("#cta", {
			scrollTrigger: {
				trigger: "#cta",
				start: "top 85%",
				toggleActions: "play none none none",
				once: true,
			},
			scale: 0.8,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		// Glitch effect on text
		const glitchElements = document.querySelectorAll(".glitch-text");
		glitchElements.forEach((el) => {
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					toggleActions: "play none none none",
				},
				x: "random(-5, 5)",
				duration: 0.1,
				repeat: 3,
				yoyo: true,
				ease: "power4.inOut",
			});
		});

		// Blood drip effect on headings
		const headings = document.querySelectorAll("h2, h3");
		headings.forEach((heading) => {
			gsap.from(heading, {
				scrollTrigger: {
					trigger: heading,
					start: "top 85%",
					toggleActions: "play none none none",
				},
				backgroundPosition: "0% 0%",
				duration: 1.5,
				ease: "power2.inOut",
			});
		});

		// Pumpkin rotation on scroll
		const pumpkinElements = document.querySelectorAll(".pumpkin-rotate");
		pumpkinElements.forEach((el) => {
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
				rotation: 360,
				ease: "none",
			});
		});

		// Fade in from sides
		gsap.from(".fade-in-left", {
			scrollTrigger: {
				trigger: ".fade-in-left",
				start: "top 85%",
				toggleActions: "play none none none",
			},
			x: -100,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: "power3.out",
		});

		gsap.from(".fade-in-right", {
			scrollTrigger: {
				trigger: ".fade-in-right",
				start: "top 85%",
				toggleActions: "play none none none",
			},
			x: 100,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: "power3.out",
		});

		// Spooky shake animation
		const shakeElements = document.querySelectorAll(".spooky-shake");
		shakeElements.forEach((el) => {
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					toggleActions: "play none none none",
				},
				rotation: "random(-5, 5)",
				x: "random(-3, 3)",
				duration: 0.1,
				repeat: 5,
				yoyo: true,
				ease: "power1.inOut",
			});
		});

		// Navbar hide/show on scroll
		let lastScroll = 0;
		ScrollTrigger.create({
			start: "top top",
			end: "max",
			onUpdate: (self) => {
				const currentScroll = self.scroll();
				if (currentScroll > lastScroll && currentScroll > 100) {
					gsap.to("nav", {
						y: -100,
						duration: 0.3,
						ease: "power2.out",
					});
				} else {
					gsap.to("nav", { y: 0, duration: 0.3, ease: "power2.out" });
				}
				lastScroll = currentScroll;
			},
		});

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return null; // This component doesn't render anything
};

export default ScrollAnimations;
