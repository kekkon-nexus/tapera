import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.tsx"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
} satisfies Config as Config;
