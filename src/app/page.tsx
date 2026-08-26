import { existsSync } from "node:fs";
import { join } from "node:path";

const links = {
  linkedin: "https://www.linkedin.com/in/guy-pearson1/",
  email: "mailto:gtlpearson@gmail.com",
  github: "https://github.com/pearsonownz1",
  x: "https://x.com/GuyPearsonzzud",
};

const route = [
  {
    era: "Early career",
    detail: (
      <>
        <strong>Supply chain & logistics</strong> · U.S. Military
      </>
    ),
  },
  {
    era: "Then",
    detail: (
      <>
        <strong>Cybersecurity operations</strong> · U.S. Cyber Command · NSA
      </>
    ),
  },
  {
    era: "After service",
    detail: (
      <>
        <strong>Head of Product</strong> · International Education Evaluations
      </>
    ),
  },
  {
    era: "2021",
    detail: (
      <>
        <strong>Founder</strong> · LiveNotary
      </>
    ),
  },
  {
    era: "Post-acquisition",
    detail: (
      <>
        <strong>Director of Product</strong> · PandaDoc
      </>
    ),
  },
  {
    era: "Today",
    now: true,
    detail: (
      <>
        <strong>VP of Product</strong> · GEO Credential Services
      </>
    ),
  },
];

function Headshot() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "photo.jpg"));

  return (
    <div className="photo-frame">
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/photo.jpg?v=2" alt="Guy Pearson" />
      ) : (
        <span className="photo-fallback" aria-hidden>
          GP
        </span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      <header className="topbar">
        <span className="brand">guyp.me</span>
        <nav className="topnav">
          <a
            className="site-link"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="site-link" href={links.email}>
            Email
          </a>
          <a
            className="site-link"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="site-link"
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </nav>
      </header>

      <section className="intro">
        <Headshot />
        <div>
          <h1>Guy Pearson</h1>
          <div className="sub">
            VP of Product, GEO Credential Services · Austin, Texas
          </div>
        </div>
      </section>

      <article className="story">
        <p>
          Hi, my name is Guy. I’m based in Austin, Texas 👋
        </p>
        <p>
          I started out in the military working in supply chain and logistics.
          Somewhere along the way, that path led me into cybersecurity, where I
          supported large-scale national security operations connected to U.S.
          Cyber Command and the NSA.
        </p>
        <p>
          After leaving public service, I made what might look like a pretty
          sharp turn into immigration, education, and legal technology.
        </p>
        <p>
          I worked across product lines involving translations and credential
          evaluations for universities, law firms, and immigration
          professionals, eventually leading product at International Education
          Evaluations. During that time, we grew the company from roughly 5
          people to more than 70.
        </p>
        <p>
          Along the way, I’ve had the chance to build and lead teams across
          Latin America, Asia, and Eastern Europe—which taught me a lot about
          building products, but probably even more about building teams.
        </p>
        <p>
          In 2021, I decided to build something of my own and founded
          LiveNotary, one of the early approved Remote Online Notarization
          platforms in the United States.
        </p>
        <p>
          LiveNotary was eventually acquired by PandaDoc, where I joined the
          team and got to experience a very different kind of scale. During my
          time there, PandaDoc grew from roughly $50M to more than $100M in ARR,
          and I eventually became Director of Product overseeing the
          company&apos;s eSignature and API product lines.
        </p>
        <p>
          Today, I’m VP of Product at GEO Credential Services, where I’m once
          again working at the intersection of technology, immigration,
          education, and document-heavy workflows.
        </p>
        <p>And outside of the day job, I’m usually tinkering with something new.</p>
        <p>
          These days, that tends to involve AI, software, agents, automation,
          and occasionally an idea that probably should have stayed in a Notes
          app.
        </p>
        <p>
          I like building things, figuring out complicated problems, and working
          with people who are excited about doing something ambitious.
        </p>
      </article>

      <section className="route">
        <div className="route-label">The route so far</div>
        <div>
          {route.map((row) => (
            <div
              key={row.era}
              className={row.now ? "route-row now" : "route-row"}
            >
              <span className="route-era">{row.era}</span>
              <span>{row.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="outro">
        <p>
          If you&apos;re in Austin—or passing through—and want to talk product,
          AI, startups, weird ideas, or anything else, reach out.
        </p>
        <p className="sell">Coffee is usually a pretty easy sell.</p>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Say hello →
        </a>
      </footer>
    </div>
  );
}
