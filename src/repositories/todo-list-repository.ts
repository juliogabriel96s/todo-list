import { Prisma, TODOLIST } from "@prisma/client";

export interface TodoListRepository{
    create(data: Prisma.TODOLISTCreateInput): Promise<TODOLIST>
    findById(id:string): Promise<TODOLIST | null>
    save(todolist: TODOLIST): Promise<TODOLIST>
}