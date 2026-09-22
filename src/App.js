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
const SUBJECT = "Let's Connect!";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;
const RESUME =
  "https://drive.google.com/file/d/1NFrxzY6nKh-yeMqBFuVvZabCVr1UURDL/view?usp=sharing";

const LINKS = [
  { label: "Devpost", href: "https://devpost.com/CarsonLeee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carson-lee/" },
  { label: "GitHub", href: "https://github.com/CarsonLeee" },
  { label: "Resume", href: RESUME },
];

const STATS = [
  { value: "8+ years", label: "Programming experience" },
  { value: "30+", label: "Features shipped to production" },
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
    body: "I build production software end to end — React and TypeScript front ends, Node and PostgreSQL services, and the AWS infrastructure underneath.",
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
        dates: "Aug 2025 – Sep 2026",
        points: [
          "Directed technical strategy and post-launch delivery for major platform features supporting 500+ advisors and the company's complete active portfolio.",
          "Led the migration of 600+ active policies and payment schedules, building field-level validation and reconciliation tooling that completed the production cutover without losing or corrupting a record.",
          "Designed a shared integration layer for 10+ external systems across payments, identity verification, e-signatures, communications, CRM, and industry data — enabling a zero-downtime e-signature provider replacement.",
          "Automated daily advisor licensing and compliance updates from an industry data provider, with validation, audit trails, and human approval before changes reached production.",
          "Built an OpenAI-powered in-app support assistant with scoped guardrails and curated documentation, escalating unresolved conversations into assigned tickets with complete context.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "Jul 2024 – Jul 2025",
        points: [
          "Designed and built an end-to-end commission accounting system that calculated, tracked, approved, and paid commissions for 100+ advisors across multi-level sales hierarchies.",
          "Built payment processing and delinquency automation covering authorization, reconciliation, failed-payment recovery, and automatic policy lifecycle transitions.",
          "Shipped major features for the redesigned life insurance platform, enabling 100+ external advisors to onboard and write policies at scale.",
          "Built the production AWS infrastructure with Terraform and GitHub Actions, reducing deployment to one approved merge backed by automated tests and 15 health alarms.",
          "Resolved 39 findings from a pre-launch security audit in two days by addressing shared weaknesses in encryption, access control, session security, and sensitive-data logging.",

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
          "Architected and developed a cross-platform mobile application with React Native, Node.js, and AWS, taking it from backend design through final-stage deployment.",
          "Integrated real-time third-party data APIs and introduced layered caching, reducing redundant requests and improving application responsiveness.",
        ],
      },
    ],
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
      "Zum Rails, Equifax, APEXA CITS, Twilio, SendGrid, BoldSign, Dropbox Sign, Zoho CRM, OpenAI API",
  },
];

const TLDR = [
  "Software engineer who builds production systems end to end — React and TypeScript front ends, Node and PostgreSQL services, and the AWS infrastructure they run on. I've shipped web platforms, a cross-platform mobile app, and seven side projects.",
  "Most recently, I progressed from Software Engineer to Lead Software Engineer at Oneday Insurance, where I led delivery of major features on the platform supporting 500+ advisors and the company's full book of business. Computer Science at Western, two hackathon wins, and a preference for problems where being wrong is expensive: payments, migrations, security.",
];

const FACTS = [
  "2× hackathon winner",
  "Lifelong athlete — focusing on MMA",
  "Assembled and configured nine custom desktop PCs.",
  "A high school CS teacher told me not to study computer science",
  "I'm a big Disney and horror fan.",
];

const CASE = {
  kicker: "Case study — Oneday Insurance",
  title: "Replacing the software that ran a growing business.",
  standfirst:
    "Oneday needed to replace an aging platform that handled customer applications, payments, and account management. Over two years, I built major parts of the replacement, owned critical features before launch, and led key improvements and data migration off the old platform.",
  facts: [
    { k: "My role", v: "Lead Software Engineer" },
    { k: "Ownership", v: "Major features, migration, post-launch expansion" },
    { k: "Product", v: "Customer and business operations platform" },
    { k: "Stack", v: "React, TypeScript, Node, PostgreSQL, AWS" },
  ],
  chapters: [
    {
      n: "01",
      label: "The problem",
      body: "Life insurance applications often required multiple forms, medical exams, and weeks of waiting, while agents managed customers through outdated, fragmented tools. Oneday wanted one platform where an agent could complete a single questionnaire, verify an applicant's identity, receive a decision within 24 hours, and manage the account afterward. The engineering challenge was replacing the legacy system without interrupting live business or risking customer and payment data.",
    },
    {
      n: "02",
      label: "What I built",
      body: "I built major features for customer onboarding, account management, payments, commission accounting, financial reporting, and connections to outside services. After launch, I continued expanding and maintaining the system by automating licensing and compliance updates, building an AI support assistant, improving payment and data-transfer workflows, and resolving production issues as the platform supported daily operations for hundreds of users.",
    },
    {
      n: "03",
      label: "Security before go-live",
      body: "An independent security audit found 39 issues days before launch. I traced many of them to shared root causes and fixed all 39 in two days. The changes protected banking and personal data, tightened who could access each feature, strengthened sign-in security, and removed sensitive information from system logs.",
    },
    {
      n: "04",
      label: "Moving the existing data",
      body: "More than 600 active customer records still lived in the old system, along with their payment schedules, financial histories, commissions, and documents. I built the process that moved and checked this information before and after the transfer. If a value did not match, the process stopped so I could investigate it. No customer record or payment was lost or changed.",
    },
    {
      n: "05",
      label: "Making releases safer",
      body: "I automated how software changes reached production using AWS, Terraform, and GitHub Actions. A release became one reviewed code merge, protected by automated tests and 15 health checks. I also connected more than 10 third-party services through a shared interface, which let me replace the digital-signature provider with no downtime.",
    },
    {
      n: "06",
      label: "Leading improvements after launch",
      body: "After my promotion to Lead Software Engineer, I led features that kept external-user licensing and compliance information current while requiring human review before changes took effect. I also built an OpenAI-powered support assistant that answered only from curated documentation and turned unresolved conversations into assigned support tickets with the full conversation attached.",
    },
  ],
  outcomes: [
    { v: "500+", l: "External users supported" },
    { v: "600+", l: "Live customer records moved safely" },
    { v: "39", l: "Security issues fixed in two days" },
    { v: "0", l: "Downtime during a critical provider replacement" },
  ],
  closing:
    "The decision I'd make again: making the transfer stop whenever the old and new data did not match. That turned silent data corruption into a visible issue I could fix before customers were affected.",
};

const VIEWS = ["full", "tldr"];
const VIEW_HINTS = {
  full: "Want the short version? Try TLDR.",
  tldr: "The short version.",
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

// Expands inline under Work rather than replacing the page, so the rest of
// the portfolio stays visible while it is open.
function CaseStudy({ onClose }) {
  return (
    <section className="case case-inline" id="case-study" aria-label="Case study">
      <div className="card case-card">
        <p className="case-kicker">{CASE.kicker}</p>
        <h3 className="case-title">{CASE.title}</h3>
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
              <h4 className="card-heading">{chapter.label}</h4>
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

      <button type="button" className="back-link back-link-end" onClick={onClose}>
        ← Hide case study
      </button>
    </section>
  );
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

  // Opening scrolls to the case study; closing returns to Work, where the
  // button lives. Skipped on first render so the page doesn't jump on load.
  // Compares the previous value rather than using a one-shot flag, so
  // StrictMode's double-invoked effects can't scroll the page on load.
  const prevCaseOpen = useRef(caseOpen);
  useEffect(() => {
    if (prevCaseOpen.current === caseOpen) return;
    prevCaseOpen.current = caseOpen;
    // The case study takes the Work section's place, so both directions
    // land on the same anchor.
    document
      .getElementById("work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [caseOpen]);

  const showView = (next) => {
    setView(next);
    setCaseOpen(false);
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
              Software engineer building production systems across web, mobile,
              and the infrastructure under them.
            </h1>
            <p className="hero-subtext">
              Software Engineer. Computer Science, Western University.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={MAILTO} onClick={copyEmail}>
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
              onClick={() => showView("full")}
            >
              Full story
            </button>
            <button
              type="button"
              className="segment"
              aria-pressed={view === "tldr"}
              onClick={() => showView("tldr")}
            >
              TLDR
            </button>
          </div>
          <p className="view-hint">{VIEW_HINTS[view]}</p>
        </div>

        {view === "full" ? (
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
              {caseOpen ? (
                <button
                  type="button"
                  className="back-link section-back"
                  onClick={() => setCaseOpen(false)}
                >
                  ← Hide case study
                </button>
              ) : (
                <SectionLabel>Work</SectionLabel>
              )}
              {caseOpen ? (
                <CaseStudy onClose={() => setCaseOpen(false)} />
              ) : (
              <div className="work-list">
                {WORK.map((job) => (
                  <div className="card work-card reveal" key={job.company}>
                    <div className="work-head">
                      <h3 className="work-company">
                        <ExternalLink href={job.href}>
                          {job.company}
                        </ExternalLink>
                      </h3>
                      <span className="work-location">{job.location}</span>
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
                    {job.press || job.caseStudy ? (
                      <div className="work-links">
                        {job.caseStudy ? (
                          <button
                            type="button"
                            className="case-link"
                            aria-expanded={caseOpen}
                            aria-controls="case-study"
                            onClick={() => setCaseOpen((open) => !open)}
                          >
                            {caseOpen
                              ? "Hide case study"
                              : "Read the case study →"}
                          </button>
                        ) : null}
                        {job.press ? (
                          <ExternalLink className="press-link" href={PRESS.href}>
                            {PRESS.label} ↗
                          </ExternalLink>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              )}
            </section>

            {!caseOpen ? (
              <>
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
                      <article
                        className="card project reveal lift"
                        key={project.name}
                      >
                        <ExternalLink
                          className="project-media"
                          href={project.href}
                        >
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
                            <span className="project-kind">
                              {project.kind}
                            </span>
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
              </>
            ) : null}
          </div>
        ) : null}

        {view === "tldr" ? (
          <section className="view view-in-right tldr" aria-label="Summary">
            <div className="card tldr-card">
              <img className="tldr-icon" src={thumbsUpPic} alt="" />
              {TLDR.map((para) => (
                <p className="tldr-para" key={para.slice(0, 24)}>
                  {para}
                </p>
              ))}
              <div className="tldr-actions">
                <a className="btn btn-solid" href={MAILTO} onClick={copyEmail}>
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

        {!caseOpen ? (
          <section className="poster reveal" aria-labelledby="poster-title">
            <h2 className="poster-title" id="poster-title">
              Let's chat.
            </h2>
            <p className="poster-line">
              <a className="poster-email" href={MAILTO} onClick={copyEmail}>
                {EMAIL}
              </a>
              <span className="poster-note" role="status">
                {copyNote}
              </span>
            </p>
          </section>
        ) : null}
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
