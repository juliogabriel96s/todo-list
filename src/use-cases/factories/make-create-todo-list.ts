import { PrismaTodoListRepository } from "@/repositories/prisma/prisma-todo-list-repository";
import { CreateTodoListUseCase } from "../todo-list/create-todo-list";

export function makeCreateTodoList(){
    const todolistRepository = new PrismaTodoListRepository()
    const useCase = new CreateTodoListUseCase(todolistRepository)

    return useCase
}