import { createRoute } from "honox/factory";

export default createRoute((c) =>
	c.render(<div class="min-h-screen flex align-middle justify-center" />, {
		route: "about",
	}),
);
