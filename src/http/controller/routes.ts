import { FastifyInstance } from "fastify";
import { createTodoList } from "./create-todo-list";

export async function todoListRoutes(app: FastifyInstance){
    app.post('/todo-list', createTodoList)
}