import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">

        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-tight"
          >
            NextTask
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-8 mt-3 text-sm font-medium overflow-x-auto">
          <Link
            href="/dashboard"
            className="whitespace-nowrap hover:opacity-70 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/board"
            className="whitespace-nowrap hover:opacity-70 transition"
          >
            Board
          </Link>

          <Link
            href="/tasks"
            className="whitespace-nowrap hover:opacity-70 transition"
          >
            Tasks
          </Link>
        </div>

      </div>
    </nav>
  );
}