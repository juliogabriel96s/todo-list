import { Either, left, right } from "@/core/either"
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error"
import { TodoListRepository } from "@/repositories/todo-list-repository"

interface DeleteTodoListUseCaseRequest{
    userId: string
}

type DeleteTodoListUseCaseResponse = Either<
ResourceNotFoundError,
{}
>

export class DeleteTodoListUseCase{
    constructor(private todolistRepository: TodoListRepository){}

    async execute({
        userId,
    }: DeleteTodoListUseCaseRequest): Promise<DeleteTodoListUseCaseResponse>{
        const todolist = await this.todolistRepository.findById(userId)

        if(!todolist){
            return left(new ResourceNotFoundError())
        }

        await this.todolistRepository.delete(todolist)

        return right({
            
        })
}
}