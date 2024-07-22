import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { makeCreateTodoList } from "@/use-cases/factories/make-create-todo-list";
import { makeDeleteTodoList } from "@/use-cases/factories/make-delete-todo-list";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteTodoList(
    request: FastifyRequest,
    reply: FastifyReply
){
    const deleteParamsSchema = z.object({
        userId: z.string(),
    })

    const {userId} = deleteParamsSchema.parse(request.params)

    try{
        const todolistUseCase = makeDeleteTodoList()

       const result =  await todolistUseCase.execute({
            userId
        })

       if(result.isLeft()){
        if(result.value instanceof ResourceNotFoundError){
            return reply.status(400).send({message: 'User not found.'})
        }
       }

       return reply.status(204).send()
    }catch(err){
        return reply.status(500).send({message: 'Internal server error'})
    }
}