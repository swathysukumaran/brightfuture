/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#FFFCF2',
				'secondary-bg': '#CCC5B9',
				'primary-button': '#403D39',
				'secondary-button': '#EB5E28',
				'text-color': '#252422',
				'primary-bg-50': 'rgba(255, 252, 242, 0.5)',
				'secondary-bg-50': 'rgba(204, 197, 185, 0.5)',
				'primary-button-50': 'rgba(64, 61, 57, 0.5)',
				'secondary-button-50': 'rgba(235, 94, 40, 0.5)',
				'text-color-50': 'rgba(37, 36, 34, 0.5)',
			},
			fontFamily: {
				'lora': ['Lora', 'serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			fontSize: {
				'heading-1-30': '30px',
				'heading-1-24': '24px',
				'heading-1-20': '20px',
				'heading-1-15': '15px',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

