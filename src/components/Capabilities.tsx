import SectionHeading from "./SectionHeading";

const items = [
  {
    title: "Product strategy",
    body: "Discovery, bets, PRDs, experiments, metrics.",
  },
  {
    title: "Design systems",
    body: "IA, flows, components, interaction polish, accessibility.",
  },
  {
    title: "Full-stack development",
    body: "React/TypeScript, Flask/SQLAlchemy, SQL, CI/CD.",
  },
  {
    title: "Architecture → Product",
    body: "Spatial thinking for user flow, constraints, and structure.",
  },
];

export default function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading k="01" title="Capabilities" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
