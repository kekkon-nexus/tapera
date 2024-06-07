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
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
			/>
			<link
				rel="stylesheet"
				href="https://unpkg.com/simple-icons-font@v12/font/simple-icons.min.css"
			/>
			<script
				src="https://unpkg.com/htmx.org@1.9.12"
				integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
				crossorigin="anonymous"
			/>
			<script
				src="https://unpkg.com/htmx.org@1.9.12/dist/ext/preload.js"
				integrity="sha384-NoiTdF/KjxH4wa6OHMdM4F6e/LIPNMcFBgOIINTTaczWo0vX1mWTOzckySqlGQS/"
				crossorigin="anonymous"
			/>
		</head>
		<body hx-boost="true" hx-ext="preload">
			<header class="w-full fixed top-0 z-10">
				<nav class="navbar bg-base-300">
					<div class="navbar-start">
						<a href="/" class="btn btn-ghost float-start text-xl font-bagnard">
							<img src="/static/favicon.svg" alt="Tapera" class="h-6 w-6" />
							<p>Tepar</p>
						</a>
					</div>
					<div class="navbar-end">
						<a
							href="https://github.com/yvvki/tapera-tapi-jelek.git"
							class="btn btn-circle btn-ghost"
						>
							<i class="si si-github text-2xl" />
						</a>
					</div>
				</nav>
			</header>
			<main>{children}</main>
			<footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
				<aside class="items-center grid-flow-col">
					<p>
						<span class="font-bagnard">
							Badan Pengelola Pembusukan Otak Indonesia
						</span>
						<br />
						Copyright <b>yvvki</b> © 2024 — All right reserved
					</p>
				</aside>
				<nav class="md:place-self-center md:justify-self-end">
					<div class="grid grid-flow-col gap-4 text-2xl leading-none">
						<a
							href="https://www.facebook.com/yvvkir"
							class="hover:text-[#0866FF] transition-colors"
						>
							<i class="si si-facebook" />
						</a>
						<a
							href="https://x.com/yvvvvvvr"
							class="hover:text-[#000000] transition-colors"
						>
							<i class="si si-x" />
						</a>
						<a
							href="https://www.youtube.com/@yvvkiRika"
							class="hover:text-[#FF0000] transition-colors"
						>
							<i class="si si-youtube" />
						</a>
					</div>
				</nav>
			</footer>
		</body>
	</html>
));
