import ssg from "@hono/vite-ssg";
import honox, { devServerDefaultOptions } from "honox/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(() => {
	return {
		plugins: [
			honox({
				devServer: {
					exclude: [
						...devServerDefaultOptions.exclude,
						/^.*\.webmanifest$/,
						/^\/favicon\.svg$/,
					],
				},
			}),
			ssg({ entry }),
		],
	};
});
