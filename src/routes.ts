import Elysia from "elysia";
import { adminRoutes } from "./admin";
import { appRoutes } from "./app";

export const routes = new Elysia({ prefix: '/api' })
    .use(adminRoutes)
    .use(appRoutes)
