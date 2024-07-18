import { Prisma, TODOLIST } from "@prisma/client";

export interface TodoListRepository{
    create(data: Prisma.TODOLISTCreateInput): Promise<TODOLIST>
}