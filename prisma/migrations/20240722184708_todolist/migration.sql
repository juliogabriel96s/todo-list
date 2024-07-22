/*
  Warnings:

  - You are about to drop the `todo-list` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "todo-list";

-- CreateTable
CREATE TABLE "todolist" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" TEXT NOT NULL,

    CONSTRAINT "todolist_pkey" PRIMARY KEY ("id")
);
