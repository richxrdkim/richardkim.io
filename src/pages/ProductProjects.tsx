import ProjectCard from "../components/ProjectCard";

export default function ProductProjects() {
  const pmProjects = [
    {
      title: "Reverse Job Search",
      blurb:
        "An AI-driven job-matching concept that flips traditional recruiting by letting companies discover candidates proactively.",
      meta: "Miro, Google Slides",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjV7VV778=/?share_link_id=476245930313" },
      ],
    },
    {
      title: "Kompas",
      blurb:
        "Personal finance decision tool that visualizes trade-offs between debt repayment, investing, and budgeting to help users plan smarter.",
      meta: "Miro, Google Slides, Notion",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ4vf-Hk=/" },
      ],
    },
    {
      title: "LocalLoop",
      blurb:
        "A hyperlocal marketplace connecting residents to nearby businesses, services, and events in real time to strengthen community ecosystems.",
      meta: "Figma, Notion, Google Slides",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ7localLoop" },
      ],
    },
    {
      title: "ArcLens",
      blurb:
        "An AI-powered productivity layer that summarizes, organizes, and prioritizes tasks and documents across tools to reduce cognitive load.",
      meta: "Miro, Loom, Notion",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ7arcLens" },
      ],
    },
    {
      title: "CampusLifeline",
      blurb:
        "A campus safety and wellness platform that centralizes emergency alerts, peer support, and resource requests into one connected system.",
      meta: "Figma, Miro, Google Slides",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ7campusLifeline" },
      ],
    },
    {
      title: "ValorLink",
      blurb:
        "A Riot-integrated feature for Valorant that matches players based on communication style, playtime, and role synergy to create stable teams.",
      meta: "Miro, Google Slides",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ4OKhUE=/" },
      ],
    },
    {
      title: "YouTube Creator Collabs",
      blurb:
        "A native feature allowing creators to co-stream and co-publish videos seamlessly, improving discoverability and engagement through shared audiences.",
      meta: "Miro, Notion, Figma",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ7youtubeCollabs" },
      ],
    },
    {
      title: "Spotify Seasons",
      blurb:
        "An extension of Spotify Wrapped introducing seasonal recaps — spring, summer, fall, and winter — to sustain engagement year-round.",
      meta: "Miro, Google Slides",
      links: [
        { name: "Miro", url: "https://miro.com/app/board/uXjVJ7spotifySeasons" },
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
