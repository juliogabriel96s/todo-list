import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { title } from "process";

describe('Create TodoList E2E', () =>{
    beforeAll(async() =>{
        await app.ready()
    })

    afterAll(async() =>{
        await app.close()
})

it('Should be able create a todolist', async() =>{

    const response = await request(app.server)
    .post('/todo-list')
    .send({
        title: 'Titulo teste',
        completed: 'Complemento teste'
    })

    expect(response.statusCode).toEqual(201)

})
})