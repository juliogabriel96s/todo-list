import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { makeEditTodoList } from "@/use-cases/factories/make-edit-todo-list";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function editTodoList(
    request: FastifyRequest,
    reply: FastifyReply
){
    const editParamsSchema = z.object({
        userId: z.string(),
    })

    const editBodySchema = z.object({
        title: z.string(),
        completed: z.string()
    })

    const {userId} = editParamsSchema.parse(request.params)
    const {title, completed} = editBodySchema.parse(request.body)

    try{
        const todolistUseCase = makeEditTodoList()

       const result =  await todolistUseCase.execute({
            userId,
            title,
            completed
        })

       if(result.isLeft()){
        if(result.value instanceof ResourceNotFoundError){
            return reply.status(400).send({message: 'User not found.'})
        }
       }

       return reply.status(200).send()
    }catch(err){
        return reply.status(500).send({message: 'Internal server error'})
    }
}