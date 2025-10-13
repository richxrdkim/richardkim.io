import { Link } from "react-router-dom";

function Card({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-gray-200 p-6 transition hover:border-blue-500"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
      <div className="mt-4 text-sm text-blue-600 opacity-0 transition group-hover:opacity-100">
        Explore →
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-3 max-w-3xl text-gray-600">
        Choose a track to browse detailed case studies and repos.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card
          to="/projects/software"
          title="Software Engineering"
          desc="Frontend (React/TypeScript), APIs (Flask/SQLAlchemy), databases, testing, and CI/CD."
        />
        <Card
          to="/projects/product"
          title="Product Management"
          desc="Problem discovery, metrics, PRDs, roadmaps, prioritization, and experiments."
        />
      </div>
    </section>
  );
}
