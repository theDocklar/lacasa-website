import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";

export const metadata: Metadata = {
	title: "LaCasa – Elegant Restaurant & Cafe",
	description: "LaCasa Restaurant & Cafe in Negombo, Sri Lanka. Experience authentic flavors and warm hospitality at No 50/A Thaladuwa Road Negombo.",
	keywords:
		"restaurant, cafe, food, menu, reservation, booking, Negombo, Sri Lanka, LaCasa, restaurant Negombo, cafe Negombo, dining Negombo",
	authors: [{ name: "LaCasa", url: "http://lacasasrilanka.com" }],
	creator: "LaCasa Restaurant",
	publisher: "LaCasa Restaurant",
	metadataBase: new URL("http://lacasasrilanka.com"),
	alternates: {
		canonical: "http://lacasasrilanka.com",
	},
	openGraph: {
		title: "LaCasa – Elegant Restaurant & Cafe",
		description: "LaCasa Restaurant & Cafe in Negombo, Sri Lanka. Experience authentic flavors and warm hospitality.",
		url: "http://lacasasrilanka.com",
	},
	icons: {
		icon: "/favicon.jpg",
	},
	themeColor: "#000000",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		userScalable: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
