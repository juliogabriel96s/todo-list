import { Either, left, right } from "@/core/either"
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error"
import { TodoListRepository } from "@/repositories/todo-list-repository"
import { TODOLIST } from "@prisma/client"

interface GetTodoListUseCaseRequest{
    userId: string
}

type GetTodoListUseCaseResponse = Either<
ResourceNotFoundError,
{
    todolist: TODOLIST
}
>

export class GetTodoListUseCase{
    constructor(private todolistRepository: TodoListRepository){}

    async execute({
        userId
    }: GetTodoListUseCaseRequest): Promise<GetTodoListUseCaseResponse>{
const todolist = await this.todolistRepository.findById(userId)

if(!todolist){
    return left(new ResourceNotFoundError())
}

return right({
    todolist
})
    }
}