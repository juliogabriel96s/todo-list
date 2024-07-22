import { Prisma } from "@prisma/client";
import { TodoListRepository } from "../todo-list-repository";
import { prisma } from "@/lib/prisma";

export class PrismaTodoListRepository implements TodoListRepository{
    async create(data: Prisma.TODOLISTCreateInput) {
        const todolist = await prisma.tODOLIST.create({
            data
        })

        return todolist
    }
    async findById(id: string) {
        const todolist = await prisma.tODOLIST.findUnique({
            where:{
                id
            }
        })

        return todolist
    }
    async save(data: { id: string; title: string; completed: string; }) {
        const todolist = await prisma.tODOLIST.update({
            where:{
                id: data.id
            },
            data
        })

        return todolist
    }
    async delete(data: { id: string; title: string; completed: string; }){
        const todolist = await prisma.tODOLIST.delete({
            where:{
                id: data.id
            }
        })
    }

}