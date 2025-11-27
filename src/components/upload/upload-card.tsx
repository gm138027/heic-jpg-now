type UploadCardProps = {
  children: React.ReactNode;
};

export function UploadCard({ children }: UploadCardProps) {
  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-gray-300 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:border-emerald-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
      {children}
    </div>
  );
}
