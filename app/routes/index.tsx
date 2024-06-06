import { createRoute } from "honox/factory";

export default createRoute((c) =>
	c.render(<h1 class="text-4xl font-bold">Tapera tapi jelek!</h1>, {
		title: "Tapera",
	}),
);
