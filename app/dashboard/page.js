import StatsCard from "@/components/dashboard/StatsCard";
import TasksChart from "@/components/dashboard/TasksChart";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const totalTasks = await prisma.task.count({
    where: {
      userId,
    },
  });

  const completedTasks = await prisma.task.count({
    where: {
      userId,
      status: "Completed",
    },
  });

  const pendingTasks = await prisma.task.count({
    where: {
      userId,
      status: "Pending",
    },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold">
          Dashboard
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Monitor your productivity and task progress.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
        />

        <StatsCard
          title="Completed"
          value={completedTasks}
        />

        <StatsCard
          title="Pending"
          value={pendingTasks}
        />
      </div>

      <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          Task Analytics
        </h2>

        <div className="flex justify-center">
          <TasksChart
            completed={completedTasks}
            pending={pendingTasks}
          />
        </div>
      </div>
    </div>
  );
}