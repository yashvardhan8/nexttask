"use client";

import { useDraggable } from "@dnd-kit/core";

export default function TaskItem({ task }) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: task.id,
      data: {
        task,
      },
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-lg border cursor-grab active:cursor-grabbing"
    >
      <h3 className="text-lg font-semibold tracking-tight">
        {task.title}
      </h3>

      <p className="text-sm text-slate-500 mt-2">
        {task.description}
      </p>

      <div className="mt-3">
        <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
          {task.priority}
        </span>
      </div>
    </div>
  );
}