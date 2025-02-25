import Elysia from "elysia";
import { userRoute } from "./routes/user.route";
import { noteRoute } from "./routes/note.route";

export const adminRoutes = new Elysia({ prefix: '/admin' })
.onRequest(async (c) => {
    // 验证 Token
})
    .use(userRoute)
    .use(noteRoute)