import { InMemoryTodoListRepository } from "@/repositories/in-memory/in-memory-todo-list-repository";
import { CreateTodoListUseCase } from "./create-todo-list";
import { beforeEach, describe, expect, it } from "vitest";

let inMemoryTodoListRepository: InMemoryTodoListRepository
let sut: CreateTodoListUseCase

describe('Create a Todo List', () =>{
beforeEach(() =>{
    inMemoryTodoListRepository = new InMemoryTodoListRepository()
    sut = new CreateTodoListUseCase(inMemoryTodoListRepository)
})

it('Create a Todo list', async() =>{
    const result = await sut.execute({
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })

    expect(result.isRight()).toBe(true)
})
})