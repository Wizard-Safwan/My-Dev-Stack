import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 p-2">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology name */}
      <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-950">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Meta information */}
      <div className="mt-4 flex min-h-7 flex-wrap items-center gap-2">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-md border border-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-400">
          {technology.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating.toFixed(1)}
        </span>
      </div>

      {/* Add button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        aria-label={
          isAdded
            ? `${technology.name} has already been added to your stack`
            : `Add ${technology.name} to your stack`
        }
        className={`mt-4 w-full rounded-lg px-3 py-2.5 text-xs font-semibold transition ${
          isAdded
            ? "cursor-not-allowed border border-emerald-100 bg-emerald-50 text-emerald-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;