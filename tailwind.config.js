/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"logo-title": "'Righteous', sans-serif",
				base: "'Geologica', sans-serif",
			},
			colors: {
				theme: {
					200: "#27564f",
					100: "#3c615c",
					300: "#2C514C",
					400: "#263e3b",
					black: "#0D0D0D",
					white: "#F2F2F2",
				},
			},
		},
	},
	plugins: [],
};
