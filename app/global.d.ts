import type {} from "hono";
import type {} from "../node_modules/hono/dist/types/jsx/intrinsic-elements";
import type {} from "typed-htmx";

type Head = {
	route?: "" | "about"
	title?: string;
	author?: string;
	description?: string;
	keywords?: string;
	og?: {
		title?: true | string;
		description?: true | string;
		image?: string;
	};
};

declare module "hono" {
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType: Overloading
		(
			content: string | Promise<string>,
			head?: Head,
		): Response | Promise<Response>;
	}
}

declare module 'hono/jsx' {
  namespace JSX {
    interface HTMLAttributes extends HtmxAttributes {}
  }
}
