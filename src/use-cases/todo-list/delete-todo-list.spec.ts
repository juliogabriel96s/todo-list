import { InMemoryTodoListRepository } from "@/repositories/in-memory/in-memory-todo-list-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { DeleteTodoListUseCase } from "./delete-todo-list";

let inMemoryTodoListRepository: InMemoryTodoListRepository
let sut: DeleteTodoListUseCase

describe('Delete a Todo List', () =>{
beforeEach(() =>{
    inMemoryTodoListRepository = new InMemoryTodoListRepository()
    sut = new DeleteTodoListUseCase(inMemoryTodoListRepository)
})

it('should be able a delete a Todo list', async() =>{
 
    await inMemoryTodoListRepository.create({
        id: 'user-id',
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })
    const result = await sut.execute({
        userId: 'user-id',
        
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryTodoListRepository.Items).toHaveLength(0)
})

it('Should be able return resource not found with id wrong', async() => {
    await inMemoryTodoListRepository.create({
        title: 'title teste',
        completed: 'fazendo um todo list com node js'
    })
    const result = await sut.execute({
        userId: 'non-existing',
    })

    expect(result.isLeft()).toBeTruthy()
})
})