import { auth } from "@clerk/nextjs/server";

export default async function MePage() {
  const { userId } = await auth();

  return (
    <div className="p-8">
      <h1>User ID</h1>
      <p>{userId || "Not signed in"}</p>
    </div>
  );
}