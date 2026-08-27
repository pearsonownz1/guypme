import Link from "next/link";

const contact = {
  linkedin: "https://www.linkedin.com/in/guy-pearson1/",
  email: "mailto:gtlpearson@gmail.com",
  github: "https://github.com/pearsonownz1",
  x: "https://x.com/GuyPearsonzzud",
};

export function SiteHeader({ current }: { current?: "home" | "projects" }) {
  return (
    <header className="topbar">
      <Link href="/" className="brand">
        guyp.me
      </Link>
      <nav className="topnav">
        <Link
          className="site-link"
          href="/projects"
          aria-current={current === "projects" ? "page" : undefined}
        >
          Projects
        </Link>
        <a
          className="site-link"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a className="site-link" href={contact.email}>
          Email
        </a>
        <a
          className="site-link"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="site-link"
          href={contact.x}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </nav>
    </header>
  );
}
