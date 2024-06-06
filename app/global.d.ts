import type {} from "hono";

type Head = {
	title?: string;
};

declare module "hono" {
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType: <explanation>
		(
			content: string | Promise<string>,
			head?: Head,
		): Response | Promise<Response>;
	}
}
