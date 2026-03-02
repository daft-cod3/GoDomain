export default function ModelCard({ title, image, description }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="h-44 w-full bg-slate-100 p-4 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </article>
  );
}
