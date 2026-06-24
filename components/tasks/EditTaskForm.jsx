"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function EditTaskForm({ task }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    task.description || ""
  );
  const [status, setStatus] = useState(task.status);

  const [priority, setPriority] = useState(
    task.priority || "Medium"
  );

  const [dueDate, setDueDate] = useState(
    task.dueDate
      ? new Date(task.dueDate)
          .toISOString()
          .split("T")[0]
      : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `/api/tasks/${task.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status,
          priority,
          dueDate,
        }),
      }
    );

    if (response.ok) {
      toast.success(
        "Task updated successfully!"
      );

      window.location.href = "/tasks";
    } else {
      toast.error(
        "Failed to update task"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-4"
    >
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
        placeholder="Task Title"
      />

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
        rows={4}
        placeholder="Description"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Update Task
      </button>
    </form>
  );
}