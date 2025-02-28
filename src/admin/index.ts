import Elysia, { error } from "elysia";
import { userRoute } from "./routes/user.route";
import { noteRoute } from "./routes/note.route";
import jwt from "@elysiajs/jwt";
import { publicRoute } from "./routes/login.route";

export const adminRoutes = new Elysia({ prefix: '/admin'}).as('scoped')
    .use(jwt({
        name: 'jwt',
        secret: process.env.SECRET!,
    }))
    .group('/public', (app) => app
        .use(publicRoute)
    )
    .group('', (app) => app
        .onBeforeHandle(async ({ jwt }) => {
            // 验证 Token
            const verifyResult = await jwt.verify();
            if (!verifyResult) {
                return error(401, { message: 'Token is invalid' });
            }
        })
        .use(userRoute)
        .use(noteRoute)
    )
