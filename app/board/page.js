import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import BoardClient from "@/components/board/BoardClient";

export default async function BoardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const tasks = await prisma.task.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const serializedTasks = tasks.map(
    (task) => ({
      ...task,
      dueDate: task.dueDate
        ? task.dueDate.toISOString()
        : null,
      createdAt:
        task.createdAt.toISOString(),
    })
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Task Board
        </h1>

        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Drag tasks between columns to update progress.
        </p>
      </div>

      <BoardClient
        initialTasks={serializedTasks}
      />
    </div>
  );
}