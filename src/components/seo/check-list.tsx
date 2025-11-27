type CheckItem = {
  title: string;
  content: string;
};

type CheckListProps = {
  title: string;
  items: CheckItem[];
};

export function CheckList({ title, items }: CheckListProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            {/* 左侧圆形对号图标 */}
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
            
            {/* 右侧内容 */}
            <div className="flex-1 pt-1">
              <h3 className="mb-1 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
