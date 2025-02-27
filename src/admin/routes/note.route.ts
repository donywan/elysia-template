import { Elysia, t } from "elysia"

class Note {
    constructor(public data: string[] = ['Moonhalo']) { }
    add(note: string) {
        this.data.push(note)
        return this.data
    }

    remove(index: number) {
        return this.data.splice(index, 1)
    }

    update(index: number, note: string) {
        return (this.data[index] = note)
    }
}

const indexParam = {
    params: t.Object({
        index: t.Number()
    }),
    body: t.Object({
        data: t.String()
    })
}

export const noteRoute = new Elysia({ prefix: '/note' })
    .decorate('note', new Note())
    .get('/test', () => 'test')
    .get('/', ({ note }) => note.data)
    .put('/', ({ note, body: { data } }) => note.add(data), {
        body: t.Object({
            data: t.String()
        })
    })
    .get(
        '/:index',
        ({ note, params: { index }, error }) => {
            return note.data[index] ?? error(404, 'Not Found :(')
        },
        {
            params: t.Object({
                index: t.Number()
            })
        }
    )
    .delete(
        '/:index',
        ({ note, params: { index }, error }) => {
            if (index in note.data) return note.remove(index)

            return error(422)
        },
        {
            params: t.Object({
                index: t.Number()
            })
        }
    )
    .patch(
        '/:index',
        ({ note, params: { index }, body: { data }, error }) => {
            if (index in note.data)
                return note.update(index, data)
            return error(422)
        },
        indexParam
    )

