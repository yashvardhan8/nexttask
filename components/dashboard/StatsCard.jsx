export default function StatsCard({
  title,
  value,
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className="text-4xl font-semibold tracking-tight mt-3 text-blue-600">
        {value}
      </h2>
    </div>
  );
}