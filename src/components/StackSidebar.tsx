import type { Technology } from "../types/technology";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (technologyId: string) => void;
  onRemoveAll: () => void;
}

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold tracking-tight text-slate-950">
          Your Stack
        </h2>

        <p className="mt-1 text-xs font-medium text-slate-500">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-44 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-xl font-light text-slate-300">
            +
          </div>

          <h3 className="mt-3 text-sm font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="mt-1 max-w-50 text-xs leading-5 text-slate-400">
            Start building your stack by adding technologies from the list.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2.5"
              >
                {/* Technology Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                  <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Technology Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-xs font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="mt-0.5 truncate text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove Individual Technology */}
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name} from your stack`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center text-lg font-bold leading-none text-slate-500 transition hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-3 flex h-10 w-full items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-medium text-red-500 transition hover:bg-slate-50 hover:text-red-600"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;