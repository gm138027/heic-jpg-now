type Step = {
  title: string;
  content: string;
};

type HowToStepsProps = {
  title: string;
  steps: {
    step1?: Step;
    step2?: Step;
    step3?: Step;
  };
};

export function HowToSteps({ title, steps }: HowToStepsProps) {
  const stepArray = [steps.step1, steps.step2, steps.step3].filter(
    (step): step is Step => step !== undefined
  );

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="space-y-6">
        {stepArray.map((step, index) => (
          <div
            key={index}
            className="relative flex items-start gap-4"
          >
            {/* 底层：左侧粗圆角竖线（左括号形状） */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-md bg-emerald-500"></div>
            
            {/* 中层：浅灰色背景卡片 */}
            <div className="relative ml-3 flex flex-1 items-start gap-4 rounded-lg bg-gray-50 p-6 pl-8">
              {/* 上层：圆形编号 */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-base font-bold text-white">
                {index + 1}
              </div>
              
              {/* 上层：文字内容 */}
              <div className="flex-1 pt-1">
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {step.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
