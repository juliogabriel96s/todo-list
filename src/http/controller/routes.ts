import { FastifyInstance } from "fastify";
import { createTodoList } from "./create-todo-list";
import { deleteTodoList } from "./delete-todo-list";
import { editTodoList } from "./edit-todo-list";
import { getTodoList } from "./get-todo-list";

export async function todoListRoutes(app: FastifyInstance){
    app.post('/todo-list', createTodoList)
    app.delete('/todo-list/:userId', deleteTodoList)
    app.put('/todo-list/:userId', editTodoList)
    app.get('/todo-list/:userId', getTodoList)
}