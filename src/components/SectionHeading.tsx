export default function SectionHeading({
  k,
  title,
  eyebrow,
}: { k: string; title: string; eyebrow?: string }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-medium tracking-widest text-gray-400">{eyebrow ?? `(${k})`}</div>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
