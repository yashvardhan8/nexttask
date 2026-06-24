import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          NextTask
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/dashboard"
            className="hover:text-blue-600 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/board"
            className="hover:text-blue-600 transition"
          >
            Board
          </Link>

          <Link
            href="/tasks"
            className="hover:text-blue-600 transition"
          >
            Tasks
          </Link>
        </div>

        {/* Right Side */}
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

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center gap-6 pb-3 text-sm font-medium">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/board">Board</Link>
        <Link href="/tasks">Tasks</Link>
      </div>
    </nav>
  );
}