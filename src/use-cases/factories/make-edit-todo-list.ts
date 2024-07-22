import { PrismaTodoListRepository } from "@/repositories/prisma/prisma-todo-list-repository";
import { EditTodoListUseCase } from "../todo-list/edit-todo-list";

export function makeEditTodoList(){
    const todolistRepository = new PrismaTodoListRepository()
    const useCase = new EditTodoListUseCase(todolistRepository)

    return useCase
}