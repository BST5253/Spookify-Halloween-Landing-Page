import "./globals.css";
import { Creepster } from "next/font/google";
import type { Metadata } from "next";

const creepster = Creepster({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Spookify | Halloween Home Decor Kit",
	description: "Transform your home into a haunted haven this Halloween.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${creepster.className} bg-midnight text-ghost`}>
				{children}
			</body>
		</html>
	);
}
