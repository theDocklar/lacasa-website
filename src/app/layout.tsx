import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";

export const metadata: Metadata = {
	title: "Giovanni's Presto Pizza – Colombo",
	description: "Giovanni's Presto Pizza at 145 Thimbirigasyaya Rd, Colombo 00500. Fresh pizza and Italian flavors in Colombo.",
	keywords:
		"pizza, Italian food, Colombo, Sri Lanka, Giovanni's Presto Pizza, restaurant Colombo, pizza Colombo, delivery",
	authors: [{ name: "Giovanni's Presto Pizza", url: "https://giovannisprestopizza.com" }],
	creator: "Giovanni's Presto Pizza",
	publisher: "Giovanni's Presto Pizza",
	metadataBase: new URL("https://giovannisprestopizza.com"),
	alternates: {
		canonical: "https://giovannisprestopizza.com",
	},
	openGraph: {
		title: "Giovanni's Presto Pizza – Colombo",
		description: "Giovanni's Presto Pizza at 145 Thimbirigasyaya Rd, Colombo 00500.",
		url: "https://giovannisprestopizza.com",
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
