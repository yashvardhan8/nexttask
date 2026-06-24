import Link from "next/link";
import TaskCard from "@/components/tasks/TaskCard";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function TasksPage() {
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

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Tasks
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage your work efficiently.
          </p>
        </div>

        <Link
          href="/tasks/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          New Task
        </Link>
      </div>

      <div className="grid gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            priority={task.priority}
            dueDate={task.dueDate}
          />
        ))}
      </div>
    </div>
  );
}