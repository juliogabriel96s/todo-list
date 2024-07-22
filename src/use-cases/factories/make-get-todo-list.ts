import { PrismaTodoListRepository } from "@/repositories/prisma/prisma-todo-list-repository";
import { GetTodoListUseCase } from "../todo-list/get-todo-list";

export function makeGetTodoList(){
    const todolistRepository = new PrismaTodoListRepository()
    const useCase = new GetTodoListUseCase(todolistRepository)

    return useCase
}