export default function AboutMe() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
      <p className="mt-4 max-w-3xl text-gray-700">
        I started in architecture, where every decision balances user flow,
        constraints, and structure. That training shaped how I approach product:
        understand real behavior, prioritize what matters, and build systems that
        are intuitive, resilient, and scalable.

        I apply architectural principles and engineering fluency to drive measurable product outcomes.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">How architecture maps to product & code</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><span className="font-medium">User circulation →</span> onboarding & task flows</li>
            <li><span className="font-medium">Constraints →</span> scoped PRDs, clear trade-offs</li>
            <li><span className="font-medium">Structure →</span> information architecture & APIs</li>
            <li><span className="font-medium">Details →</span> interaction polish & accessibility</li>
            <li><span className="font-medium">Plans →</span> roadmaps, milestones, and release plans</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">What I do</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Frame problems from research and data; define success metrics</li>
            <li>Write PRDs & experiments; align partners on the smallest valuable slice</li>
            <li>Design flows & components; prototype quickly</li>
            <li>Build full-stack features (React/TS, Flask/SQLAlchemy, SQL)</li>
            <li>Measure, learn, and iterate toward outcomes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
