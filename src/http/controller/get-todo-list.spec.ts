import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { prisma } from "@/lib/prisma";

describe('Get TodoList E2E', () =>{
    beforeAll(async() =>{
        await app.ready()
    })

    afterAll(async() =>{
        await app.close()
})

it('Should be able get a todolist', async() =>{

    const todolist = await prisma.tODOLIST.create({
       data:{
          title: 'Titulo teste',
          completed: 'Complemento teste'
       }
    })

    

    const response = await request(app.server)
    .get(`/todo-list/${todolist.id}`)
    .send()

    console.log(response.body)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
        todolist: expect.objectContaining({
          title: 'Titulo teste',
          completed: 'Complemento teste'
        })
      });
    

})
})