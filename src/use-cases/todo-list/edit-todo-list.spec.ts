import { InMemoryTodoListRepository } from "@/repositories/in-memory/in-memory-todo-list-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { EditTodoListUseCase } from "./edit-todo-list";

let inMemoryTodoListRepository: InMemoryTodoListRepository
let sut: EditTodoListUseCase

describe('Edit a Todo List', () =>{
beforeEach(() =>{
    inMemoryTodoListRepository = new InMemoryTodoListRepository()
    sut = new EditTodoListUseCase(inMemoryTodoListRepository)
})

it('should be able a edit a Todo list', async() =>{
 
    await inMemoryTodoListRepository.create({
        id: 'user-id',
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })
    const result = await sut.execute({
        userId: 'user-id',
        title: 'edit title',
        completed: 'comentario editado'
    })

    expect(result.isRight()).toBeTruthy()
})

it('Should be able return resource not found with id wrong', async() => {
    await inMemoryTodoListRepository.create({
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })
    const result = await sut.execute({
        userId: 'non-existing',
        title: 'error',
        completed: 'todo-list error'
    })

    expect(result.isLeft()).toBeTruthy()
})
})