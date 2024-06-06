import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from 'honox/server'

export default jsxRenderer(({ children, title }) => (
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			{title ? <title>{title}</title> : <></>}

			<Link rel="stylesheet" href="/style.css" />
		</head>
		<body>{children}</body>
	</html>
));
