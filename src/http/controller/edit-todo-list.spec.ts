import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { prisma } from "@/lib/prisma";

describe('Edit TodoList E2E', () =>{
    beforeAll(async() =>{
        await app.ready()
    })

    afterAll(async() =>{
        await app.close()
})

it('Should be able edit a todolist', async() =>{

    const todolist = await prisma.tODOLIST.create({
       data:{
          title: 'Titulo teste',
          completed: 'Complemento teste'
       }
    })

    

    const response = await request(app.server)
    .put(`/todo-list/${todolist.id}`)
    .send({
        title: 'Titulo teste',
        completed: 'Complemento teste'
    })

    expect(response.statusCode).toEqual(200)

})
})