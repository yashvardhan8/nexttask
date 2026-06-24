"use client";

import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";

export default function BoardColumn({
  title,
  tasks,
  status,
}) {
  const { setNodeRef, isOver } =
    useDroppable({
      id: status,
    });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[500px] rounded-2xl p-3 transition ${
        isOver
          ? "bg-blue-100/20"
          : ""
      }`}
    >
      <h2 className="bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold mb-4">
        {title} ({tasks.length})
      </h2>

      <div className="space-y-4 min-h-[400px]">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}