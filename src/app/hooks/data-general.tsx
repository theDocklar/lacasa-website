import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { StatusPageProps } from "@/app/types/common.types";

export const InfoGeneralData = {
	urlLogo: "/logo.png",
	urlMap: "https://www.google.com/maps",
	phone: "074 391 4331",
	fax: "+94 77 377 7654",
	emailInfo: "lacasacafeandrestaurant@gmail.com",
	emailReservations: "lacasacafeandrestaurant@gmail.com",
	address: "No 50/A Thaladuwa Road Negombo",
	city: "Negombo",
	zip: "11500",
	country: "LK",
	largeCountry: "Sri Lanka",
	phoneLabel: "Phone:",
	faxLabel: "WhatsApp:",
	copyright: "© 2025 LaCasa Restaurant.",
	scrollToTopLabel: "Go to top",
	scrollToTopIconClasses: "fas fa-angle-double-up",
	menuToggleAriaLabelOpen: "Open menu",
	menuToggleAriaLabelClose: "Close menu",
	topbar: {
		addressIcon: "fa-solid fa-location-dot",
		addressAriaLabel: "Location",
		phoneIcon: "fa-solid fa-phone",
		phoneAriaLabel: "Call us at",
		emailIcon: "fa-solid fa-envelope",
		emailAriaLabel: "Email us at",
	},
};

export const LogoData={
	urlLogo: "/logo.png",
	altLogo: "Logo",
	hrefLogo: "/",
	widthLogo: 48,
	heightLogo: 120,
}

export const menuLegalData = [
	{
		id: 1,
		title: "Privacy Policy",
		link: "/",
	},
	{
		id: 2,
		title: "Spam Policy",
		link: "/",
	},
	{
		id: 3,
		title: "Terms & Conditions",
		link: "/",
	},
	{
		id: 4,
		title: "Accessibility Statement",
		link: "/",
	},
];

export const socialIconsData = [
	{
		href: "https://www.tiktok.com/@lacasanegombo",
		ariaLabel: "TikTok",
		icon: FaTiktok,
	},
	{
		href: "https://www.instagram.com/la_casa_negombo",
		ariaLabel: "Instagram",
		icon: FaInstagram,
	},
];

export const confirmationPageData: StatusPageProps = {
	backgroundImageSrc: "/bg/bg-cta.jpg",
	backgroundImageAlt: "Decorative background with a pleasant texture",
	imageSrc: "",
	imageAlt: "Illustration for confirmation page",
	imageWidth: 500,
	imageHeight: 283,
	heading: "Thank you!",
	text: "We have received your submission and will get back to you as soon as possible.",
	buttonLink: "/",
	buttonText: "Back to Homepage",
};