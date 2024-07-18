import { Prisma, TODOLIST } from "@prisma/client";
import { TodoListRepository } from "../todo-list-repository";
import { randomUUID } from "crypto";

export class InMemoryTodoListRepository implements TodoListRepository{

    public Items: TODOLIST[] = []

   async create(data: Prisma.TODOLISTCreateInput){
        const todolist = {
            id: randomUUID(),
            title: data.title,
            completed: data.completed
        }

         this.Items.push(todolist)
          return todolist
        }

}