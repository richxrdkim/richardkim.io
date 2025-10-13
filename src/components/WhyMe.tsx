import SectionHeading from "./SectionHeading";

export default function WhyMe() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading k="03" title="Why work with me" />
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Architecture-informed</h3>
          <p className="mt-2 text-sm text-gray-600">User flow, constraints, and structure guide every decision.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Outcome-driven</h3>
          <p className="mt-2 text-sm text-gray-600">Define success upfront, ship smallest valuable, measure, iterate.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Hands-on delivery</h3>
          <p className="mt-2 text-sm text-gray-600">I design and build—bridging product, design, and engineering.</p>
        </div>
      </div>
    </section>
  );
}
