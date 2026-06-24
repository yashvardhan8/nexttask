"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskCard from "./TaskCard";

export default function TasksClient({ tasks }) {
  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredTasks = tasks.filter(
    (task) =>
      task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <>
  <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
  />

  {filteredTasks.length === 0 ? (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        No Tasks Found
      </h2>

      <p className="text-slate-500">
        Create your first task and start
        organizing your work.
      </p>
    </div>
  ) : (
    <div className="grid gap-6">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
        />
      ))}
    </div>
  )}
</>
  );
}