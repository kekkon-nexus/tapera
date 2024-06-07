import { createRoute } from "honox/factory";

export default createRoute((c) =>
	c.render(
		<div class="min-h-screen flex align-middle justify-center">
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<video src="/static/about/making-money-money.mp4" autoplay loop />
		</div>,
		{
			route: "about",
		},
	),
);
