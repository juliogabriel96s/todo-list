import { Prisma, TODOLIST } from "@prisma/client";
import { TodoListRepository } from "../todo-list-repository";
import { randomUUID } from "crypto";

export class InMemoryTodoListRepository implements TodoListRepository{
    
    public Items: TODOLIST[] = []

   async create(data: Prisma.TODOLISTCreateInput){
        const todolist = {
            id: data.id ?? randomUUID(),
            title: data.title,
            completed: data.completed
        }

         this.Items.push(todolist)
          return todolist
        }

        async findById(id: string) {
            const todolist = this.Items.find((item) => item.id === id)

            if(!todolist){
                return null
            }

            return todolist
        }

       async save(todolist: TODOLIST) {
            const itemIndex = this.Items.findIndex(item => item.id === todolist.id)

            this.Items[itemIndex] = todolist

            return todolist
        }
       
}