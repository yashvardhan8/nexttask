import { prisma } from "@/lib/prisma";

export async function PUT(
  request
) {
  const body =
    await request.json();

  const task =
    await prisma.task.update({
      where: {
        id: body.taskId,
      },
      data: {
        status: body.status,
      },
    });

  return Response.json(task);
}