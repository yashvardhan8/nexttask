"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import BoardColumn from "./BoardColumn";

export default function BoardClient({
  initialTasks,
}) {
  const [tasks, setTasks] =
    useState(initialTasks);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = async (
    event
  ) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    const task = tasks.find(
      (t) => t.id === taskId
    );

    if (!task) return;

    if (
      task.status === newStatus
    )
      return;

    const updatedTasks =
      tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: newStatus,
            }
          : t
      );

    setTasks(updatedTasks);

    await fetch(
      "/api/tasks/move",
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          taskId,
          status: newStatus,
        }),
      }
    );
  };

  const pending = tasks.filter(
    (task) =>
      task.status === "Pending"
  );

  const inProgress =
    tasks.filter(
      (task) =>
        task.status ===
        "In Progress"
    );

  const completed = tasks.filter(
    (task) =>
      task.status ===
      "Completed"
    );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={
        closestCenter
      }
      onDragEnd={handleDragEnd}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <BoardColumn
          title="Pending"
          status="Pending"
          tasks={pending}
        />

        <BoardColumn
          title="In Progress"
          status="In Progress"
          tasks={inProgress}
        />

        <BoardColumn
          title="Completed"
          status="Completed"
          tasks={completed}
        />
      </div>
    </DndContext>
  );
}