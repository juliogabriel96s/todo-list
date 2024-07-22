import { PrismaTodoListRepository } from "@/repositories/prisma/prisma-todo-list-repository";
import { DeleteTodoListUseCase } from "../todo-list/delete-todo-list";

export function makeDeleteTodoList(){
    const todolistRepository = new PrismaTodoListRepository()
    const useCase = new DeleteTodoListUseCase(todolistRepository)

    return useCase
}