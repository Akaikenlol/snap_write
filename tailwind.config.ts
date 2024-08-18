import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "20px",
				lg: "80px",
			},
			screens: {
				sm: "375px",
				md: "768px",
				lg: "1200px",
			},
		},
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		extend: {
			colors: {
				dark: {
					100: "#09111F",
					200: "#0B1527",
					300: "#0F1C34",
					350: "#12213B",
					400: "#27344D",
					500: "#2E3D5B",
					600: "#E1E7F2",
				},
			},
			fontFamily: {
				sans: ["var(--font-recursive)", ...fontFamily.sans],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
