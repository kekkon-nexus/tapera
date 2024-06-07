import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Titillium Web"', "sans-serif"],
				bagnard: ['"Bagnard"', "serif"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					...themes["light"],
					primary: "0d6",
					secondary: "fb8",
					tertiary: "f86",
				},
				dark: {
					...themes["dark"],
					primary: "0d6",
					secondary: "fb8",
					tertiary: "f86",
				},
			},
		],
	},
	darkMode: ["class", '[data-theme="night"]'],
} satisfies Config as Config;
