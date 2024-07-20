import { Either, left, right } from "@/core/either"
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error"
import { TodoListRepository } from "@/repositories/todo-list-repository"
import { TODOLIST } from "@prisma/client"

interface EditTodoListUseCaseRequest{
    userId: string
    title: string
    completed: string
}

type EditTodoListUseCaseResponse = Either<
ResourceNotFoundError,
{
    todolist: TODOLIST
}
>

export class EditTodoListUseCase{
    constructor(private todolistRepository: TodoListRepository){}

    async execute({
        userId,
        title,
        completed
    }: EditTodoListUseCaseRequest): Promise<EditTodoListUseCaseResponse>{
        const todolist = await this.todolistRepository.findById(userId)

        if(!todolist){
            return left(new ResourceNotFoundError())
        }

        todolist.title = title
        todolist.completed = completed

        await this.todolistRepository.save(todolist)

        return right({
            todolist
        })
}
}