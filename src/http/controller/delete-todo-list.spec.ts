import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { prisma } from "@/lib/prisma";

describe('Delete TodoList E2E', () =>{
    beforeAll(async() =>{
        await app.ready()
    })

    afterAll(async() =>{
        await app.close()
})

it('Should be able delete a todolist', async() =>{

    const todolist = await prisma.tODOLIST.create({
        title: 'Titulo teste',
        completed: 'Complemento teste'
    })

    

    const response = await request(app.server)
    .post('/todo-list')
    .send({
        title: 'Titulo teste',
        completed: 'Complemento teste'
    })

    expect(response.statusCode).toEqual(201)

})
})