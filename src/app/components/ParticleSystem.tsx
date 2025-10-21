"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleSystem = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log("Particles loaded", container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: "transparent",
				},
			},
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 100,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: ["#ff7518", "#a30000", "#f8f8ff"],
				},
				links: {
					enable: false,
				},
				move: {
					direction: "bottom",
					enable: true,
					outModes: {
						default: "out",
					},
					random: true,
					speed: 1.5,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value:
						typeof window !== "undefined" && window.innerWidth < 768
							? 40
							: 80,
				},
				opacity: {
					value: { min: 0.3, max: 0.8 },
					animation: {
						enable: true,
						speed: 1,
						sync: false,
					},
				},
				shape: {
					type: ["circle", "triangle"],
				},
				size: {
					value: { min: 2, max: 6 },
				},
				rotate: {
					value: { min: 0, max: 360 },
					animation: {
						enable: true,
						speed: 5,
						sync: false,
					},
				},
			},
			detectRetina: true,
		}),
		[]
	);

	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
				className="fixed inset-0 pointer-events-none z-0"
			/>
		);
	}

	return null;
};

export default ParticleSystem;
