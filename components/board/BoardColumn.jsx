"use client";

import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";

export default function BoardColumn({
  title,
  tasks,
  status,
}) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className="min-h-[500px]"
    >
      <h2 className="bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold mb-4">
        {title} ({tasks.length})
      </h2>

      <div className="space-y-4">
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