import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projects — Guy Pearson",
  description: "Side projects from Guy Pearson.",
};

const projects = [
  {
    name: "Selling Highs",
    url: "https://sellinghighs.com",
    image: "/projects/selling-highs.png",
    why: "SellingHighs.com is a fully AI-run quantitative trading system that trades Kalshi's daily record-high-temperature prediction markets across five U.S. cities. It ingests real-time METAR station observations from the Iowa Environmental Mesonet, official NWS climate reports, and NOAA's National Blend of Models forecast to build a calibrated probability distribution for each temperature bracket, then compares that model against Kalshi's live order book to surface statistically significant, fee-adjusted trading edges. Every candidate trade is reviewed by an LLM-based approval agent — which weighs the model's edge, market conditions, and risk limits before deciding to approve or deny it — and, once approved, is executed automatically through Kalshi's official Order API, with every fill reconciled against the day's official climate report. Has executed 500+ AI-approved trades, generating a net profit of roughly $70 on settled positions to date.",
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
        {projects.map((project) => (
          <article key={project.name} className="project">
            <a
              className="project-shot"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={`${project.name} screenshot`} />
            </a>
            <div className="project-body">
              <h2>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h2>
              <a
                className="project-url"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                sellinghighs.com
              </a>
              <p>{project.why}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
