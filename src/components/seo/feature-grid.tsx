type Feature = {
  title: string;
  content: string;
};

type FeatureGridProps = {
  title: string;
  features: Feature[];
};

export function FeatureGrid({ title, features }: FeatureGridProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-emerald-500"
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>
            <div className="mb-3 border-t border-slate-200"></div>
            <p className="text-base leading-relaxed text-slate-700">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
