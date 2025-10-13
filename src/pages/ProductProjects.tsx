import ProjectCard from "../components/ProjectCard";

export default function ProductProjects() {
  const pmProjects = [
    {
      title: "Reverse Job Search",
      blurb:
        "An AI-driven job-matching concept that flips traditional recruiting by letting companies discover candidates proactively.",
      meta: "Miro, Google Slides",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ7VV778=/?share_link_id=476245930313" },
      ],
    },
    {
      title: "Kompas",
      blurb:
        "Personal finance decision tool that visualizes trade-offs between debt repayment, investing, and budgeting to help users plan smarter.",
      meta: "Miro, Google Slides, Notion",
      links: [
        { name: "Miro", url: "YOUR_LINK" },
        { name: "Slides", url: "YOUR_LINK" },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">
        Product Management Projects
      </h2>

      <p className="mt-3 max-w-3xl text-gray-600">
        Case studies highlighting my end-to-end PM workflow — from discovery and user
        research to PRDs, launch metrics, and retrospectives.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {pmProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
