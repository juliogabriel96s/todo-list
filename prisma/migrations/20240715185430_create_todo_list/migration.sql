-- CreateTable
CREATE TABLE "todo-list" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" TEXT NOT NULL,

    CONSTRAINT "todo-list_pkey" PRIMARY KEY ("id")
);
