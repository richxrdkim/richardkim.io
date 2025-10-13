type Link = { name: string; url: string };

type Project = {
  title: string;
  blurb: string;
  meta?: string;
  links: Link[];
};

export default function ProjectCard({ title, blurb, meta, links }: Project) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{blurb}</p>

      {meta && (
        <p className="mt-3 text-sm text-gray-500">
          <strong>Stack / Tools:</strong> {meta}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-blue-700 border-blue-200 hover:bg-blue-50"
          >
            {link.name}
            <svg
              className="ml-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3h6v6h-2V6.414l-7.293 7.293-1.414-1.414L13.586 5H11V3z" />
              <path d="M5 5h4v2H7v6h6v-2h2v4H5V5z" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
