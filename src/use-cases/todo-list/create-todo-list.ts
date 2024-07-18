import { Either, right } from "@/core/either"
import { TodoListRepository } from "@/repositories/todo-list-repository"
import { TODOLIST } from "@prisma/client"

interface CreateTodoListUseCaseRequest{
    title: string
    completed: string
}

type CreateTodoListUseCaseResponse = Either<
{},
{
    todolist: TODOLIST
}
>

export class CreateTodoListUseCase{
    constructor(private TodoListRepository: TodoListRepository){}

    async execute({
        title,
        completed
    }:CreateTodoListUseCaseRequest): Promise<CreateTodoListUseCaseResponse>{
        const todolist = await this.TodoListRepository.create({
            title,
            completed
        })

        return right({
            todolist
        })
    }
}

