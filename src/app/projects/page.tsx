import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projects — Guy Pearson",
  description: "Side projects from Guy Pearson.",
};

const placeholders = [
  {
    name: "Project one",
    url: "https://example.com",
    why: "A short note on why I built this — the itch, the idea, or the thing I wanted to try.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="wrap">
      <SiteHeader current="projects" />

      <section className="intro">
        <div>
          <h1>Projects</h1>
          <div className="sub">
            Fun side projects. Screenshot, link, and why I built it.
          </div>
        </div>
      </section>

      <section className="projects">
        {placeholders.map((project) => (
          <article key={project.name} className="project">
            <div className="project-shot" aria-hidden>
              <span>Screenshot</span>
            </div>
            <div className="project-body">
              <h2>{project.name}</h2>
              <a
                className="project-url"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.url.replace(/^https?:\/\//, "")}
              </a>
              <p>{project.why}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
