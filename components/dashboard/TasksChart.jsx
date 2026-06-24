"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function TasksChart({
  completed,
  pending,
}) {
  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
        label
      >
        <Cell fill="#22c55e" />
        <Cell fill="#ef4444" />
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}