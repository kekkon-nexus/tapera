import { NONCE, secureHeaders } from "hono/secure-headers";

secureHeaders({
	contentSecurityPolicy: import.meta.env["PROD"]
		? {
				scriptSrc: [NONCE],
			}
		: undefined,
});
