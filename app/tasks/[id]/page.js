import { prisma } from "@/lib/prisma";
import EditTaskForm from "@/components/tasks/EditTaskForm";

export default async function EditTaskPage({ params }) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Edit Task
      </h1>

      <EditTaskForm task={task} />
    </div>
  );
}