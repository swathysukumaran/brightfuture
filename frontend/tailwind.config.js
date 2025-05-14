/** @type {import('tailwindcss').Config} */

export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#3b82f6",     // Bright blue
				secondary: "#facc15",   // Soft yellow
				accent: "#34d399",      // Soft green
				muted: "#f3f4f6",       // Light gray for backgrounds
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
			},
			borderRadius: {
				xl: "1rem",
				"2xl": "1.5rem",
			},
			spacing: {
				18: "4.5rem",
				22: "5.5rem",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
};

