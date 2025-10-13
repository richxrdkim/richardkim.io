import ProjectCard from "../components/ProjectCard";

export default function SoftwareProjects() {
  const devProjects = [
    {
      title: "Mechanic Shop API",
      blurb:
        "A Flask + PostgreSQL backend with JWT authentication, role-based access, rate limiting, and OpenAPI documentation. Deployed on Render as a production-ready API.",
      meta: "Flask, SQLAlchemy, PostgreSQL, JWT, Render",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/richxrdkim/Mechanic_Shop_API",
        },
      ],
    },
    {
      title: "E-Commerce API",
      blurb:
        "RESTful API built with Flask and MySQL for managing products, orders, and users — featuring CRUD operations, authentication, and relational data modeling.",
      meta: "Flask, MySQL, SQLAlchemy, REST API",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/richxrdkim/E-Commerce-API",
        },
      ],
    },
    {
      title: "FakeStore",
      blurb:
        "A React front-end app integrating the FakeStoreAPI to display products, manage state, and handle CRUD actions using React Router and React Bootstrap.",
      meta: "React, React Router, FakeStoreAPI, React Bootstrap",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/richxrdkim/FakeStore",
        },
      ],
    },
    {
      title: "Mock Event Center Website",
      blurb:
        "Front-end concept for an event center site showcasing dynamic navigation, responsive layouts, and modular components with Bootstrap and JavaScript.",
      meta: "HTML, CSS, Bootstrap, JavaScript",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/richxrdkim/Mock-Event-Center-Website",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">Software Development Projects</h1>
        <p className="mt-2 text-gray-600">
          Full-stack and front-end builds that demonstrate my technical problem-solving and implementation skills.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {devProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
