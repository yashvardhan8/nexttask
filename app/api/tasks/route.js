import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(request) {
  const { userId } = await auth();

  if (!userId) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      priority: body.priority,
      dueDate: body.dueDate
        ? new Date(body.dueDate)
        : null,
      userId,
    },
  });

  return Response.json(task);
}

export async function DELETE(request) {
  const { id } = await request.json();

  await prisma.task.delete({
    where: {
      id,
    },
  });

  return Response.json({
    message: "Task deleted",
  });
}