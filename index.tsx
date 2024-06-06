import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.render(<h1>Tapera tapi jelek!</h1>));

export default app;
