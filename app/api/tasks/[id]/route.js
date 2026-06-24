import { prisma } from "@/lib/prisma";

export async function PUT(request, { params }) {
  const { id } = await params;

  const body = await request.json();

  const updatedTask = await prisma.task.update({
    where: {
      id,
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      priority: body.priority,
      dueDate: body.dueDate
        ? new Date(body.dueDate)
        : null,
    },
  });

  return Response.json(updatedTask);
}