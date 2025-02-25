import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { routes } from "./routes";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});
const db = drizzle({ client: pool });

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .use(routes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
