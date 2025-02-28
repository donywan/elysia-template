import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const publicRoute = new Elysia()
    .post('/login', async ({ jwt }) => {
        return jwt.sign({
            id: 1,
            name: 'admin'
        })
    })