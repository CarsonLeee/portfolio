import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

import profilePic from "./assets/pic.jpg";
import wavePic from "./assets/wave.png";
import computerPic from "./assets/computer.png";
import ideaPic from "./assets/idea.png";
import thinkingPic from "./assets/thinking.png";
import thumbsUpPic from "./assets/thumbsup.png";
import aslearnGif from "./assets/ASLearn.gif";
import investalyticsGif from "./assets/InvestAlytics.gif";
import arriveGif from "./assets/arrive.gif";
import climateheroesGif from "./assets/climateheroes.gif";
import aichefGif from "./assets/aichef.gif";
import restaurantfinderGif from "./assets/restaurantfinder.gif";
import personalwebsiteGif from "./assets/personalwebsite.gif";

const EMAIL = "carson0@hotmail.com";
const RESUME =
  "https://drive.google.com/file/d/1pvX55twrePoRAc8TLrMJCai3KjPoTwmL/view?usp=sharing";

const LINKS = [
  { label: "Devpost", href: "https://devpost.com/CarsonLeee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carson-lee/" },
  { label: "GitHub", href: "https://github.com/CarsonLeee" },
  { label: "Resume", href: RESUME },
];

const STATS = [
  { value: "2+ yrs", label: "Shipping production software" },
  { value: "7", label: "Projects shipped" },
  { value: "2×", label: "Hackathon wins" },
];

const ABOUT = [
  {
    title: "Who I am",
    image: computerPic,
    body: "Computer science graduate from Western University. Started with video games and PC builds, ended up building software for a living.",
  },
  {
    title: "What I do",
    image: ideaPic,
    body: "Production software end to end, mostly alongside a team — React and TypeScript front ends, Node and PostgreSQL behind them, AWS underneath.",
  },
  {
    title: "Why I do it",
    image: thinkingPic,
    body: "I like the problems where being wrong is expensive: payments, migrations, security. And turning big ideas into things people use.",
  },
];

const PRESS = {
  label: "The Financial Post on the platform launch",
  href: "https://financialpost.com/pmn/business-wire-news-releases-pmn/the-future-of-life-insurance-is-here-onedays-agent-first-platform-and-products-hit-the-canadian-market",
};

const WORK = [
  {
    company: "Oneday Insurance",
    href: "https://onedayinsurance.ca/",
    location: "Aurora, ON",
    press: true,
    caseStudy: true,
    roles: [
      {
        title: "Lead Software Engineer",
        dates: "Jul 2025 – Present",
        points: [
          "Lead the platform that is now the company's system of record — every policy, payment and underwriting decision runs through it, across 70+ screens and a 111-table database.",
          "Migrated 600+ live policies off the legacy system with no lost or corrupted data.",
          "Closed 39 pre-launch security-audit findings in two days, most tracing back to a handful of root causes.",
          "Built the production AWS environment as code, with an automated release pipeline.",
          "Integrated 10+ external systems behind one interface; swapped the e-signature vendor live with zero downtime.",
          "Led an internal AI support platform with retrieval, guardrails, and confidence-based escalation.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "Jul 2024 – Jul 2025",
        points: [
          "Launched the wholesale life insurance platform for 100+ external agents — covered in the Financial Post.",
          "Owned payment processing end to end on Zum Rails, including failed-payment handling.",
          "Designed the delinquency logic driving the customer payment lifecycle.",
          "Built identity verification on Equifax, with fallbacks and secure links by email or SMS.",
        ],
      },
    ],
  },
  {
    company: "INNoVA",
    href: "https://theinnovasolution.ca/",
    location: "Toronto, ON",
    press: false,
    roles: [
      {
        title: "Full Stack Developer",
        dates: "Jul – Nov 2023",
        points: [
          "Led architecture and build of a cross-platform mobile app (React Native, Node, AWS) through to deployment.",
          "Cut page load times with a layered caching strategy.",
        ],
      },
    ],
  },
];

const EARLIER = [
  {
    role: "Software Developer Intern",
    company: "YK Air System",
    dates: "2020",
  },
  {
    role: "Digital Marketing Intern",
    company: "Perfect Marketing",
    dates: "2021",
  },
];

const PROJECTS = [
  {
    name: "ASLearn",
    kind: "Swift app",
    award: null,
    href: "https://youtu.be/r_kv72kp82o",
    image: aslearnGif,
    alt: "ASLearn demo",
    description:
      "Learn American Sign Language: multiple-choice drills plus live camera feedback on your signing via a machine learning model.",
    tags: ["Swift", "ML", "Firebase"],
  },
  {
    name: "InvestAlytics",
    kind: "Full-stack web",
    award: null,
    href: "https://youtu.be/gZZPqXrzDvs",
    image: investalyticsGif,
    alt: "InvestAlytics demo",
    description:
      "MERN app with Python ML predicting end-of-day stock prices, plus live market data, watchlists, and a weighted scoring tool.",
    tags: ["React", "Node", "Python"],
  },
  {
    name: "ARrive",
    kind: "Augmented reality",
    award: "1st place, hackathon",
    href: "https://www.youtube.com/watch?v=9xUEvrdHoP4",
    image: arriveGif,
    alt: "ARrive demo",
    description:
      "Recognizes AC Transit bus signs in real time and overlays transit info on top of them.",
    tags: ["Swift", "ARKit"],
  },
  {
    name: "ClimateHeroes",
    kind: "Unity game",
    award: "1st in category",
    href: "https://www.youtube.com/watch?v=Bvs19RVjYaU",
    image: climateheroesGif,
    alt: "ClimateHeroes demo",
    description:
      "A tower defense game that teaches clean energy and climate action.",
    tags: ["C#", "Unity"],
  },
  {
    name: "AI Chef",
    kind: "Full-stack web",
    award: null,
    href: "https://github.com/CarsonLeee/AI-Chef",
    image: aichefGif,
    alt: "AI Chef demo",
    description:
      "Generates recipes from whatever's in your kitchen, using OpenAI and the Spoonacular API.",
    tags: ["React", "OpenAI"],
  },
  {
    name: "Restaurant Finder",
    kind: "Web app",
    award: null,
    href: "https://github.com/CarsonLeee/Restaurant-Finder",
    image: restaurantfinderGif,
    alt: "Restaurant Finder demo",
    description:
      "Finds places to eat nearby with Google Maps and live restaurant data.",
    tags: ["JavaScript", "Maps API"],
  },
  {
    name: "Personal Website v1",
    kind: "Front-end",
    award: null,
    href: "https://v1.carsonlee.ca/",
    image: personalwebsiteGif,
    alt: "Personal Website v1 demo",
    description:
      "My first site — interactive, responsive, and a real milestone in learning to build things.",
    tags: ["HTML", "CSS", "JS"],
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: "TypeScript, JavaScript, Python, SQL, Swift, HTML/CSS",
  },
  {
    group: "Frameworks",
    items:
      "React, Node.js, Express, Prisma, React Native, BullMQ, Zod, Vitest, REST APIs",
  },
  {
    group: "Infrastructure",
    items:
      "AWS (ECS Fargate, RDS, ElastiCache, S3/CloudFront), Terraform, Docker, GitHub Actions CI/CD, PostgreSQL, Redis, MongoDB, Git, Sentry",
  },
  {
    group: "Integrations",
    items:
      "Zum Rails, Equifax, Twilio, SendGrid, Dropbox Sign, Zoho CRM, OpenAI API",
  },
];

const TLDR = [
  "Software engineer who builds production systems end to end — React and TypeScript front ends, Node and PostgreSQL services, and the AWS infrastructure they run on. I've shipped web platforms, a cross-platform mobile app, and seven side projects.",
  "Right now I'm Lead Software Engineer at Oneday Insurance, where I lead the platform the business runs on. Computer Science at Western, two hackathon wins, and a preference for problems where being wrong is expensive: payments, migrations, security.",
];

const FACTS = [
  "2× hackathon winner",
  "Lifelong athlete — these days that means MMA",
  "Built nine desktop PCs from the parts up",
  "A high school CS teacher told me not to study computer science",
];

const CASE = {
  kicker: "Case study — Oneday Insurance",
  title: "Replacing the system a whole insurance business runs on.",
  standfirst:
    "Oneday sells no-exam life insurance to Canadians other insurers turn away — underwritten by Humania Assurance, sold across seven provinces, with a decision inside 24 hours. That promise ran on a legacy platform nobody could safely change. Over two years our engineering team built its replacement. I led the work, and owned the migration that moved the live book of business onto it without losing a policy.",
  facts: [
    { k: "My role", v: "Lead Software Engineer" },
    { k: "Team", v: "Built with the Oneday engineering team" },
    { k: "Product", v: "No-exam life insurance, 7 provinces" },
    { k: "Stack", v: "React, TypeScript, Node, PostgreSQL, AWS" },
  ],
  chapters: [
    {
      n: "01",
      label: "The problem",
      body: "A 24-hour decision on applicants with real health histories only works if intake, underwriting and servicing are fast and correct. The legacy platform was the only record of who was insured, what they owed, and what had been paid — so every new product idea queued behind it and nothing could change quickly without risking live policies. Replacing it meant rebuilding all three at once; the business had no appetite for a half-migrated state.",
    },
    {
      n: "02",
      label: "What I built",
      body: "The team built a platform of 70+ screens covering application intake, underwriting, and policy servicing, over a 111-table database, with 11 role-based workspaces that decide what each kind of user — advisor, underwriter, admin, wholesale agent — can see and do. I led the architecture and the technical direction, and built the intake, payments, and integration layers myself. It is now the system of record for the company's entire book of business, with 500+ advisors onboarded.",
    },
    {
      n: "03",
      label: "The migration",
      body: "600+ live policies had to move with their payment schedules and outstanding financial obligations intact. I built the migration tool to verify every field against confirmed reference records before and after the move, so a mismatch stopped the run instead of quietly corrupting a policy. Not one policy or payment was lost or altered in the transfer.",
    },
    {
      n: "04",
      label: "Security before go-live",
      body: "A full pre-launch audit came back days before launch. I closed all 39 findings in two days — most traced back to a handful of root causes, so fixing one pattern cleared a whole cluster of them: encryption of banking and personal identity data, access-control gaps, session hardening, and stripping personal data out of logs. The platform went live with real customer data fully protected.",
    },
    {
      n: "05",
      label: "Keeping it shippable",
      body: "I built out the production AWS environment as code — Terraform, ECS Fargate, GitHub Actions — so a deployment is one approved merge for the whole team instead of a manual, error-prone ritual, backed by automated tests and 15 health alarms that surface problems before customers notice. Ten-plus external systems sit behind a common interface, which is how we swapped the e-signature vendor on a live system with zero downtime.",
    },
  ],
  outcomes: [
    { v: "500+", l: "Advisors onboarded on the platform" },
    { v: "0", l: "Policies or payments lost in migration" },
    { v: "39", l: "Security findings closed in two days" },
    { v: "1 merge", l: "From manual releases to one approved merge" },
  ],
  closing:
    "The decision I'd make again: having the migration tool refuse to run on a mismatch. It turned a reconciliation risk into a problem we caught before it ever reached a customer.",
};

const VIEWS = ["full", "tldr"];
const VIEW_HINTS = {
  full: "Want the short version? Try TLDR.",
  tldr: "The short version, in one screen.",
};

function ExternalLink({ href, className, children, ...rest }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
    </svg>
  );
}

function SectionLabel({ children }) {
  return <h2 className="section-label reveal">{children}</h2>;
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("darkMode") === "true";
    } catch {
      return false;
    }
  });
  const [view, setView] = useState("full");
  const [caseOpen, setCaseOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try {
      localStorage.setItem("darkMode", darkMode ? "true" : "false");
    } catch {
      // Storage can be unavailable (private mode, blocked cookies).
    }
  }, [darkMode]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  // Scroll progress bar under the header.
  useEffect(() => {
    const onScroll = () => {
      const bar = progressRef.current;
      if (!bar) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal on scroll, staggered by position within the element's own group.
  // Re-runs per view so newly mounted cards get observed too.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const siblings = Array.from(el.parentElement?.children || []);
          const i = Math.min(siblings.indexOf(el), 5);
          el.style.transitionDelay = i > 0 ? `${i * 60}ms` : "0ms";
          el.dataset.shown = "1";
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.dataset.shown !== "1") io.observe(el);
    });
    return () => io.disconnect();
  }, [view, caseOpen]);

  const openCase = () => {
    setCaseOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Returning from the case study lands back on Work, where it was opened.
  const closeCase = () => {
    setCaseOpen(false);
    requestAnimationFrame(() => {
      document
        .getElementById("work")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // mailto: only works when a mail client is registered, so copy the
  // address as well and confirm it.
  const copyEmail = useCallback(() => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(EMAIL).then(
      () => setCopied(true),
      () => {}
    );
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const copyNote = copied ? "Copied" : "";

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <button type="button" className="wordmark" onClick={toTop}>
            Carson Lee
          </button>
          <nav className="nav" aria-label="Profiles and resume">
            {LINKS.map((link) => (
              <ExternalLink
                key={link.label}
                href={link.href}
                className={`nav-link nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </ExternalLink>
            ))}
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDarkMode((on) => !on)}
              aria-label={
                darkMode ? "Switch to light theme" : "Switch to dark theme"
              }
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
        <div className="progress" aria-hidden="true" ref={progressRef} />
      </header>

      <main className="main">
        <section className="hero" aria-label="Introduction">
          <div className="hero-text">
            <p className="hero-badge">
              <img src={wavePic} alt="" />
              Hi, I'm Carson
            </p>
            <h1 className="hero-title">
              Software engineer building production systems end to end — web,
              mobile, and the infrastructure under them.
            </h1>
            <p className="hero-subtext">
              Lead Software Engineer at Oneday Insurance. Computer Science,
              Western University.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-solid"
                href={`mailto:${EMAIL}`}
                onClick={copyEmail}
              >
                Email me
              </a>
              <ExternalLink className="btn btn-outline" href={RESUME}>
                View resume
              </ExternalLink>
              <span className="copy-note" role="status">
                {copyNote}
              </span>
            </div>
          </div>
          <div className="hero-photo">
            <img src={profilePic} alt="Carson Lee" />
          </div>
        </section>

        <div className="stats">
          {STATS.map((stat) => (
            <div className="stat card reveal lift" key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {caseOpen ? (
          <div className="view-switch">
            <button type="button" className="back-link" onClick={closeCase}>
              ← Back to the full story
            </button>
          </div>
        ) : (
          <div className="view-switch">
            <div className="segmented" role="group" aria-label="Level of detail">
              <span
                className="segment-indicator"
                aria-hidden="true"
                style={{
                  transform: `translateX(calc(${VIEWS.indexOf(
                    view
                  )} * (100% + 4px)))`,
                }}
              />
              <button
                type="button"
                className="segment"
                aria-pressed={view === "full"}
                onClick={() => setView("full")}
              >
                Full story
              </button>
              <button
                type="button"
                className="segment"
                aria-pressed={view === "tldr"}
                onClick={() => setView("tldr")}
              >
                TLDR
              </button>
            </div>
            <p className="view-hint">{VIEW_HINTS[view]}</p>
          </div>
        )}

        {!caseOpen && view === "full" ? (
          <div className="view view-in-left">
            <section className="block">
              <SectionLabel>About</SectionLabel>
              <div className="about-grid">
                {ABOUT.map((item) => (
                  <article className="card reveal lift" key={item.title}>
                    <img className="about-icon" src={item.image} alt="" />
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-body">{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="block" id="work">
              <SectionLabel>Work</SectionLabel>
              <div className="work-list">
                {WORK.map((job) => (
                  <div className="card work-card reveal" key={job.company}>
                    <div className="work-head">
                      <div className="work-head-left">
                        <h3 className="work-company">
                          <ExternalLink href={job.href}>
                            {job.company}
                          </ExternalLink>
                        </h3>
                        <span className="work-location">{job.location}</span>
                      </div>
                      {job.caseStudy ? (
                        <button
                          type="button"
                          className="case-link"
                          onClick={openCase}
                        >
                          Case study →
                        </button>
                      ) : null}
                    </div>
                    {job.roles.map((role) => (
                      <div className="work-role" key={role.title}>
                        <div className="work-role-head">
                          <h4 className="work-role-title">{role.title}</h4>
                          <span className="pill">{role.dates}</span>
                        </div>
                        <ul className="bullets">
                          {role.points.map((point) => (
                            <li key={point.slice(0, 40)}>
                              <span className="bullet-dot">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {job.press ? (
                      <ExternalLink className="press-link" href={PRESS.href}>
                        {PRESS.label} ↗
                      </ExternalLink>
                    ) : null}
                  </div>
                ))}
                <div className="card earlier reveal">
                  <p className="earlier-label">Internships</p>
                  {EARLIER.map((item) => (
                    <p className="earlier-row" key={item.company}>
                      <span className="earlier-role">{item.role}</span>
                      {item.company}
                      <span className="earlier-dates">{item.dates}</span>
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="block">
              <SectionLabel>Education</SectionLabel>
              <div className="card education reveal lift">
                <div>
                  <h3 className="card-heading">
                    The University of Western Ontario
                  </h3>
                  <p className="card-body">
                    Bachelor of Science, Computer Science — London, ON
                  </p>
                </div>
                <span className="pill">Sept 2019 – Apr 2023</span>
              </div>
            </section>

            <section className="block">
              <SectionLabel>Projects</SectionLabel>
              <div className="projects-grid">
                {PROJECTS.map((project) => (
                  <article className="card project reveal lift" key={project.name}>
                    <ExternalLink className="project-media" href={project.href}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                      />
                    </ExternalLink>
                    <div className="project-body">
                      <div className="project-head">
                        <h3 className="card-title">
                          <ExternalLink href={project.href}>
                            {project.name}
                          </ExternalLink>
                        </h3>
                        <span className="project-kind">{project.kind}</span>
                      </div>
                      {project.award ? (
                        <p className="pill pill-block">{project.award}</p>
                      ) : null}
                      <p className="card-body">{project.description}</p>
                      <ul className="tag-list">
                        {project.tags.map((tag) => (
                          <li className="tag" key={tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="block">
              <SectionLabel>Skills</SectionLabel>
              <dl className="skills-list">
                {SKILLS.map((skill) => (
                  <div className="card skill-row reveal" key={skill.group}>
                    <dt className="skill-group">{skill.group}</dt>
                    <dd className="skill-items">{skill.items}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        ) : null}

        {caseOpen ? (
          <section className="view view-in-right case" aria-label="Case study">
            <div className="card case-card">
              <p className="case-kicker">{CASE.kicker}</p>
              <h2 className="case-title">{CASE.title}</h2>
              <p className="case-standfirst">{CASE.standfirst}</p>
              <div className="case-facts">
                {CASE.facts.map((fact) => (
                  <div key={fact.k}>
                    <p className="case-fact-key">{fact.k}</p>
                    <p className="case-fact-value">{fact.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="chapters">
              {CASE.chapters.map((chapter) => (
                <div className="card chapter reveal" key={chapter.n}>
                  <p className="chapter-n">{chapter.n}</p>
                  <div>
                    <h3 className="card-heading">{chapter.label}</h3>
                    <p className="chapter-body">{chapter.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="outcomes">
              {CASE.outcomes.map((out) => (
                <div className="card outcome reveal lift" key={out.l}>
                  <p className="outcome-value">{out.v}</p>
                  <p className="outcome-label">{out.l}</p>
                </div>
              ))}
            </div>

            <div className="closing reveal">
              <p className="closing-text">{CASE.closing}</p>
              <ExternalLink className="closing-link" href={PRESS.href}>
                {PRESS.label} ↗
              </ExternalLink>
            </div>
            <button type="button" className="back-link back-link-end" onClick={closeCase}>
              ← Back to the full story
            </button>
          </section>
        ) : null}

        {!caseOpen && view === "tldr" ? (
          <section className="view view-in-right tldr" aria-label="Summary">
            <div className="card tldr-card">
              <img className="tldr-icon" src={thumbsUpPic} alt="" />
              {TLDR.map((para) => (
                <p className="tldr-para" key={para.slice(0, 24)}>
                  {para}
                </p>
              ))}
              <div className="tldr-actions">
                <a
                  className="btn btn-solid"
                  href={`mailto:${EMAIL}`}
                  onClick={copyEmail}
                >
                  Let's connect
                </a>
                <span className="copy-note" role="status">
                  {copyNote}
                </span>
              </div>
            </div>
            <aside className="card facts-panel">
              <h2 className="facts-title">A few fun facts</h2>
              <ul className="bullets">
                {FACTS.map((fact) => (
                  <li key={fact}>
                    <span className="bullet-dot">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        ) : null}

        <section className="poster reveal" aria-labelledby="poster-title">
          <h2 className="poster-title" id="poster-title">
            Let's build something.
          </h2>
          <p className="poster-line">
            <a
              className="poster-email"
              href={`mailto:${EMAIL}`}
              onClick={copyEmail}
            >
              {EMAIL}
            </a>
            <span className="poster-note" role="status">
              {copyNote}
            </span>
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-name">Carson Lee</span>
          <button type="button" className="back-to-top" onClick={toTop}>
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
