type CheckItem = {
  title: string;
  content: string;
};

type CheckListProps = {
  title: string;
  intro?: string;
  items: CheckItem[];
  variant?: "default" | "stacked";
};

export function CheckList({
  title,
  intro,
  items,
  variant = "default",
}: CheckListProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      {intro && <p className="text-base leading-relaxed text-slate-700">{intro}</p>}
      <div className="space-y-6">
        {items.map((item, index) =>
          variant === "stacked" ? (
            <div key={index} className="relative flex items-start gap-4">
              <div className="absolute left-0 top-0 h-full w-1 rounded-md bg-emerald-500"></div>
              <div className="relative ml-3 flex flex-1 rounded-lg bg-gray-50 p-6 pl-8">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {item.content}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
