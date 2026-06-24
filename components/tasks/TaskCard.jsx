"use client";

import Link from "next/link";
import AnimatedCard from "@/components/AnimatedCard";
import { toast } from "sonner";

export default function TaskCard({
  id,
  title,
  description,
  status,
  priority,
  dueDate,
}) {
  const deleteTask = async () => {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    toast.success("Task deleted");
    window.location.reload();
  };

  const statusColor =
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : status === "In Progress"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  const priorityColor =
    priority === "High"
      ? "bg-red-100 text-red-700"
      : priority === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <AnimatedCard>
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex gap-2 flex-wrap mt-5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
          >
            {status}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor}`}
          >
            {priority || "Medium"} Priority
          </span>
        </div>

        {dueDate && (
          <p className="text-sm text-slate-500 mt-4">
            Due {new Date(dueDate).toLocaleDateString()}
          </p>
        )}

        <div className="flex gap-3 mt-6">
          <Link
            href={`/tasks/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Edit
          </Link>

          <button
            onClick={deleteTask}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </AnimatedCard>
  );
}