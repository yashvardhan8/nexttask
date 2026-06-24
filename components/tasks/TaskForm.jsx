"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status,
          priority,
          dueDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const data = await response.json();

      console.log("Data:", data);

      toast.success("Task created successfully!");

      setTitle("");
      setDescription("");
      setStatus("Pending");
      setPriority("Medium");
      setDueDate("");
    } catch (error) {
      console.error("Error:", error);

      toast.error(
        "Something went wrong."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-4"
    >
      <div>
        <label className="block mb-2">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block mb-2">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          rows={4}
        />
      </div>

      <div>
        <label className="block mb-2">
          Status
        </label>

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
      </div>

      <div>
        <label className="block mb-2">
          Priority
        </label>

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
      </div>

      <div>
        <label className="block mb-2">
          Due Date
        </label>

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
      >
        Create Task
      </button>
    </form>
  );
}