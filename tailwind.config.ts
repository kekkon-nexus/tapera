import daisyui from "daisyui";
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
} satisfies Config as Config;
