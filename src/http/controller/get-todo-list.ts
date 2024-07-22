import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { makeGetTodoList } from "@/use-cases/factories/make-get-todo-list";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getTodoList(
    request: FastifyRequest,
    reply: FastifyReply
){
    const getParamsSchema = z.object({
        userId: z.string(),
    })

    const {userId} = getParamsSchema.parse(request.params)

    try{
        const todolistUseCase = makeGetTodoList()

       const result =  await todolistUseCase.execute({
            userId
        })

       if(result.isLeft()){
        if(result.value instanceof ResourceNotFoundError){
            return reply.status(400).send({message: 'User not found.'})
        }
       }

       return reply.status(200).send(result.value)
    }catch(err){
        return reply.status(500).send({message: 'Internal server error'})
    }
}