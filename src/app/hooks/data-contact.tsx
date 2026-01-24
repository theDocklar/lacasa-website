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
			name: "LaCasa Negombo",
			addressLine1: "No 50/A Thaladuwa Road Negombo,",
			addressLine2: "Negombo, Sri Lanka, 11500",
			phone: "074 391 4331",
			email: "lacasacafeandrestaurant@gmail.com",
			imageSrc: "/locations/location-1.jpg",
			imageAltText: "Image of the LaCasa Negombo location",
			directionLink: "https://www.google.com/maps", // Replace with actual direction link
			directionButtonText: "Get direction",
		},
	],
};