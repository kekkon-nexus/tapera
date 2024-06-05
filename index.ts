import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Tapera tapi jelek!"));

export default app;
