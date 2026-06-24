import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

import {
  CheckSquare,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-10">
        <div className="max-w-5xl w-full">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-12 md:p-20 text-center">

            <span className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
              Task Management Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
              Organize your work.
              <span className="block text-blue-600 dark:text-blue-500">
                Stay focused.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Manage tasks, track progress, and stay productive with a clean and modern workspace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/tasks"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium"
              >
                Get Started
              </Link>

              <Link
                href="/dashboard"
                className="border border-gray-300 dark:border-slate-700 px-8 py-4 rounded-xl font-medium"
              >
                View Dashboard
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CheckSquare size={40} />}
            title="Task Management"
            description="Create, edit, update and organize your tasks efficiently."
          />

          <FeatureCard
            icon={<BarChart3 size={40} />}
            title="Analytics"
            description="Track productivity with charts and insights."
          />

          <FeatureCard
            icon={<ShieldCheck size={40} />}
            title="Secure Access"
            description="Authentication keeps your data safe and private."
          />
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-semibold text-blue-600">
              100%
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Secure Authentication
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-semibold text-blue-600">
              24/7
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Task Availability
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-semibold text-blue-600">
              Fast
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Productivity Workflow
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center bg-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to get organized?
          </h2>

          <p className="text-lg mb-8 opacity-90">
            Start managing your tasks with NextTask today.
          </p>

          <Link
            href="/tasks"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
          >
            Start Now
          </Link>
        </div>
      </section>
    </main>
  );
}