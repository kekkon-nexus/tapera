import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

export default jsxRenderer(({ children, title }, c) => (
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="theme-color" content="#0d6" />
			{title ? <title>{title}</title> : <></>}

			<link rel="icon" href="/static/favicon.svg" />
			<link rel="mask-icon" href="/static/favicon.svg" color="#0d6" />
			<link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
			<link rel="manifest" href="/static/app.webmanifest" />

			<Link rel="stylesheet" href="/style.css" />
			<Script src="/app/client.ts" async nonce={c.get("secureHeadersNonce")} />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
				rel="stylesheet"
			/>
		</head>
		<body>
			<header class="fixed w-full">
				<nav class="navbar bg-base-100">
					<a href="/" class="btn btn-ghost float-start text-xl font-bagnard">
						<img src="/static/favicon.svg" alt="Tapera" class="h-6 w-6" />
						<p>Tapera</p>
					</a>
				</nav>
			</header>
			<main>{children}</main>
			<footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
				<aside class="items-center grid-flow-col">
					<img src="/static/favicon.svg" alt="Tapera" class="h-10 w-10" />
					<p>
						<span class="font-bagnard">
							Badan Pengelola Tabungan Perumahan Rakyat
						</span>
						<br />
						Copyright © 2024 - All right reserved
					</p>
				</aside>
				<nav class="md:place-self-center md:justify-self-end">
					<div class="grid grid-flow-col gap-4">{/* Social media */}</div>
				</nav>
			</footer>
		</body>
	</html>
));
