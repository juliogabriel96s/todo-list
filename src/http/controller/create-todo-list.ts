import { makeCreateTodoList } from "@/use-cases/factories/make-create-todo-list";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createTodoList(
    request: FastifyRequest,
    reply: FastifyReply
){
    const createBodySchema = z.object({
        title: z.string(),
        completed: z.string()
    })

    const {title, completed} = createBodySchema.parse(request.body)

    try{
        const todolistUseCase = makeCreateTodoList()

       const result =  await todolistUseCase.execute({
            title,
            completed
        })

        if(result.isRight()){
            return reply.status(201).send()
        }

        return reply.status(400).send(result.value)
    }catch(err){
        return reply.status(500).send({message: 'Internal server error'})
    }
}