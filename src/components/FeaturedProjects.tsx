import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Mechanic Shop API",
    desc: "Flask + SQLAlchemy + MySQL. Auth, schemas, blueprints, tests.",
    href: "/projects/software",
    img: "/projects/mechanic.jpg",
  },
  {
    title: "FakeStore React",
    desc: "React + Router + API. Catalog, cart, CRUD, usability focus.",
    href: "/projects/software",
    img: "/projects/fakestore.jpg",
  },
  {
    title: "Kompas PM Case Study",
    desc: "Discovery → PRD → experiment design → measurement.",
    href: "/projects/product",
    img: "/projects/pm.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading k="02" title="Featured Projects" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.title} to={p.href} className="group overflow-hidden rounded-2xl border border-gray-200">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-3 text-sm text-blue-600">Open →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
