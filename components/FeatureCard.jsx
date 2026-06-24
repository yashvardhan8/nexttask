export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="mb-5 text-blue-600">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}