import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) =>
	mode === "client"
		? {
				build: {
					rollupOptions: {
						input: ["/style.css"],
					},
				},
				plugins: [client()],
			}
		: {
				build: {
					emptyOutDir: false,
				},
				plugins: [honox(), ssg({ entry })],
			},
);
