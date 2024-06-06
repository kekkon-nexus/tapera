import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

export default jsxRenderer(({ children, title }, c) => (
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			{title ? <title>{title}</title> : <></>}

			<Link rel="stylesheet" href="/style.css" />
			<Script src="/app/client.ts" async nonce={c.get("secureHeadersNonce")} />
		</head>
		<body>{children}</body>
	</html>
));
