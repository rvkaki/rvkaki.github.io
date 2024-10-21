import { useState } from "react";
import ExternalIcon from "../icons/external";
import GithubIcon from "../icons/github";

const projects = [
  {
    title: "soccerstats",
    description:
      "A web app that allows users to analyze stats from soccer matches and export data visualizations.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Konva.js",
      "FastAPI",
      "Python",
    ],
    images: ["/soccerstats-screenshot-1.png", "/soccerstats-screenshot-2.png"],
    links: {
      github: "https://github.com/rvkaki/soccerstats",
      external: "https://soccerstats.rjvieira.com",
    },
  },
  {
    title: "nbastats",
    description:
      "A web app that allows users to analyze stats from NBA matches, teams and players.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Konva.js"],
    images: ["/nbastats-screenshot-1.png", "/nbastats-screenshot-2.png"],
    links: {
      github: "https://github.com/rvkaki/nbastats",
      external: "https://nbastats.rjvieira.com",
    },
  },
];

function StackedImages({ images }: { images: string[] }) {
  const [visibleIdx, setVisibleIdx] = useState<number>(0);

  function handleMouseEnter(idx: number) {
    setVisibleIdx(idx);
  }

  function handleMouseLeave() {
    setVisibleIdx(0);
  }

  return (
    <div className="relative h-full">
      {images.map((image, idx) => (
        <img
          key={image}
          src={image}
          alt="Project screenshot"
          className={`absolute rounded-md top-0 left-0 w-full h-full object-cover ${
            idx === visibleIdx
              ? "z-10 brightness-50 group-hover:brightness-100"
              : "brightness-[.25]"
          } ${
            idx === 0 ? "" : "transform translate-x-[24px] translate-y-[24px]"
          }`}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

function ProjectCard({
  description,
  images,
  techStack,
  title,
  links,
  reverse,
}: (typeof projects)[number] & { reverse?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 my-6 isolate group">
      <a
        href={links.external}
        target="_blank"
        className={`md:row-start-1 md:row-end-1 z-0 h-[180px] md:h-[350px] relative ${
          reverse
            ? "md:col-start-5 md:col-end-13"
            : "md:col-start-1 md:col-end-9"
        }`}
      >
        <StackedImages images={images} />
      </a>
      <div
        className={`md:row-start-1 md:row-end-1 flex flex-col justify-center h-fit gap-4 z-10 ${
          reverse
            ? "md:col-start-1 md:col-end-7 items-start"
            : "md:col-start-7 md:col-end-13 items-end text-right"
        }`}
      >
        <h3 className="text-2xl font-semibold text-slate-100">{title}</h3>
        <p className="text-slate-300 py-3 px-6 bg-zinc-800 rounded-md shadow-xl">
          {description}
        </p>
        <div
          className={`w-full flex flex-wrap gap-2 ${
            reverse ? "justify-start" : "justify-end"
          }`}
        >
          {techStack.map((tag) => (
            <div key={tag} className="bg-zinc-900">
              <span className="py-1.5 px-2 bg-amber-900 bg-opacity-40 text-slate-300 rounded text-xs">
                {tag}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {links.github && (
            <a
              href={links.github}
              className="text-zinc-500 hover:text-zinc-100"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {links.external && (
            <a
              href={links.external}
              className="text-zinc-500 hover:text-zinc-100"
            >
              <ExternalIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="w-full min-h-screen py-24 gap-16 flex flex-col items-center px-3 md:px-0">
      <h2 className="text-3xl dark:text-amber-300 text-amber-600 font-semibold">
        Projects
      </h2>

      {projects.map((project, idx) => (
        <ProjectCard key={project.title} {...project} reverse={idx % 2 === 0} />
      ))}
    </section>
  );
}
