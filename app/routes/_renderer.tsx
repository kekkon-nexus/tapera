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
		</head>
		<body>
			<header>
				<nav class="navbar bg-base-100">
					<a href="/" class="btn btn-ghost text-xl">
						<img src="/static/favicon.svg" alt="Tapera" class="h-6 w-6" />
						Tapera
					</a>
				</nav>
			</header>
			<main>{children}</main>
		</body>
	</html>
));
