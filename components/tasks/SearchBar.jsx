"use client";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <input
      type="text"
      placeholder="🔍 Search tasks..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      className="w-full mb-8 px-5 py-4 rounded-2xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}