import Elysia from "elysia";

export const appRoutes = new Elysia({ prefix: '/app' })
    .onRequest(async ({}) => {
        // 验证API KEY
    })
