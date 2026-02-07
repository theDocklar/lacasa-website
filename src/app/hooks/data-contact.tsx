import { title } from "process";

export const HeroInnerContactData = {
	title: "contact us",
	breadcrumbs: [
		{
			id: 1,
			title: "Home",
			link: "/",
		},
		{
			id: 2,
			title: "Contact us",
			link: "",
		},
	],
	image: "/bg/bg-cta.jpg",
  altText: "Contact us",
};

export const contactData = {
	subtitle: "Reservation",
	title: "Book a Table on Time",
  align: "center",
	phrase: `The first restaurant proprietor is believed to have
            been one A. Boulanger, a soup vendor, who opened his
            business in 1765.`,
	formAction: "/ruta-de-envio",
	className: "",
	formContent: {
		nameLabel: "Name:",
		namePlaceholder: "Name",
		phoneLabel: "Phone:",
		phonePlaceholder: "Phone",
		emailLabel: "Email:",
		emailPlaceholder: "Email",
		personsLabel: "Persons:",
		personsPlaceholder: "0",
		dateLabel: "Date:",
		timeLabel: "Hours:",
		messageLabel: "Message:",
		messagePlaceholder: "Comments",
		submitButtonText: "Book a Table",
	},
};

export const titleLocationsData = {
	title: "Our locations",
	align: "left",
};

// Extract location data into an array
export const locationsData = {
	title: "Our locations",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
	items: [
		{
			id: 1,
			name: "Giovanni's Presto Pizza",
			addressLine1: "145 Thimbirigasyaya Rd,",
			addressLine2: "Colombo 00500, Sri Lanka",
			phone: "077 033 5366",
			email: "info@giovannisprestopizza.com",
			imageSrc: "/locations/location-1.jpg",
			imageAltText: "Image of Giovanni's Presto Pizza location",
			directionLink: "https://www.google.com/maps",
			directionButtonText: "Get direction",
		},
	],
};