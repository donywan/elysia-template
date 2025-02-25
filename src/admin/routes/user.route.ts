import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import Elysia from "elysia";

export const userRoute = new Elysia({ prefix: '/user' })
    .state('build', 1).get('/', ({ store: { build } }) => {
        return {};
    })
    .get('/note', (c) => {
    })
    .post('/', ({ body, store }) => {
        return { hello: 'world' };
    })
    .get('/', () => {
        return { hello: 'Elysia' }
    })

export const countries = pgTable('countries', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
});
