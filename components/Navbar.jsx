import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          NextTask
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/dashboard"
            className="hover:opacity-70 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/board"
            className="hover:opacity-70 transition"
          >
            Board
          </Link>

          <Link
            href="/tasks"
            className="hover:opacity-70 transition"
          >
            Tasks
          </Link>

          <ThemeToggle />

          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              href="/sign-in"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}