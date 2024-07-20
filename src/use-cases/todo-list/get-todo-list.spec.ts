import { InMemoryTodoListRepository } from "@/repositories/in-memory/in-memory-todo-list-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { GetTodoListUseCase } from "./get-todo-list";

let inMemoryTodoListRepository: InMemoryTodoListRepository
let sut: GetTodoListUseCase

describe('Get a Todo List', () =>{
beforeEach(() =>{
    inMemoryTodoListRepository = new InMemoryTodoListRepository()
    sut = new GetTodoListUseCase(inMemoryTodoListRepository)
})

it('should be able a get a Todo list', async() =>{
 
    await inMemoryTodoListRepository.create({
        id: 'user-id',
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })
    const result = await sut.execute({
        userId: 'user-id'
    })

    expect(result.isRight()).toBeTruthy()
})

it('Should be able return resource not found with id wrong', async() => {
    await inMemoryTodoListRepository.create({
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })
    const result = await sut.execute({
        userId: 'non-existing'
    })

    expect(result.isLeft()).toBeTruthy()
})
})