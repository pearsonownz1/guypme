import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projects — Guy Pearson",
  description: "Side projects from Guy Pearson.",
};

const projects: {
  name: string;
  url?: string;
  image: string;
  why: string;
}[] = [
  {
    name: "Selling Highs",
    url: "https://sellinghighs.com",
    image: "/projects/selling-highs.png",
    why: "SellingHighs.com is a fully AI-run quantitative trading system that trades Kalshi's daily record-high-temperature prediction markets across five U.S. cities. It ingests real-time METAR station observations from the Iowa Environmental Mesonet, official NWS climate reports, and NOAA's National Blend of Models forecast to build a calibrated probability distribution for each temperature bracket, then compares that model against Kalshi's live order book to surface statistically significant, fee-adjusted trading edges. Every candidate trade is reviewed by an LLM-based approval agent — which weighs the model's edge, market conditions, and risk limits before deciding to approve or deny it — and, once approved, is executed automatically through Kalshi's official Order API, with every fill reconciled against the day's official climate report. Has executed 500+ AI-approved trades, generating a net profit of roughly $70 on settled positions to date.",
  },
  {
    name: "RushJobs",
    url: "https://rushjobs.co",
    image: "/projects/rushjob.png",
    why: "RushJobs is a full-stack SaaS that automates the job search pipeline end-to-end, from discovery to submission. Built with a React/Vite frontend and an Express + PostgreSQL/Drizzle backend, it continuously discovers new postings via scheduled scans. Every posting passes through an AI pipeline (OpenAI models) that parses job content, applies user-defined hard filters, and scores fit across six weighted dimensions — mandatory qualifications, responsibility overlap, domain fit, seniority alignment, location/compensation, and differentiating experience. The platform tracks applications through a pipeline with Gmail-based status detection, follow-up task automation, and analytics on scoring-weight changes over time.",
  },
  {
    name: "Border Intel",
    image: "/projects/border-intel.png",
    why: "A real-time logistics intelligence platform built around Laredo, TX, the busiest inland port on the US-Mexico border. It ingests live data from multiple public sources: ADS-B aircraft telemetry (adsb.lol) for airborne traffic around Laredo International Airport, U.S. CBP border-crossing statistics, rail carrier volumes, maritime vessel tracking, live traffic-camera feeds, and stock/market quotes, then fuses them into a single operational view. Built as a full-stack TypeScript app (React/Vite frontend, Express API, OpenAPI-driven contracts) with a live interactive map. I live on the border, and the ability to draw in many different sources to make informed decisions and potentially future predictions on trade outcomes.",
  },
];

function ProjectLink({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  if (!href) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

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
            <ProjectLink href={project.url} className="project-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={`${project.name} screenshot`} />
            </ProjectLink>
            <div className="project-body">
              <h2>
                <ProjectLink href={project.url}>{project.name}</ProjectLink>
              </h2>
              {project.url ? (
                <a
                  className="project-url"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.url.replace(/^https?:\/\//, "")}
                </a>
              ) : null}
              <p>{project.why}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
