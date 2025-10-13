import SectionHeading from "./SectionHeading";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading k="04" title="Let’s talk" />
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 p-6">
        <p className="text-gray-700">Have a project or want to review a case study?</p>
        <div className="flex gap-3">
          <a
            href="mailto:you@yourdomain.com"
            className="inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:border-blue-500"
          >
            Email me
          </a>
          <a
            href="/projects"
            className="inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:border-blue-500"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
