import TaskForm from "@/components/tasks/TaskForm";

export default function NewTaskPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Create New Task
      </h1>

      <TaskForm />
    </div>
  );
}