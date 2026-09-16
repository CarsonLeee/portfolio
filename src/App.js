import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

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
const RESUME_URL =
  "https://drive.google.com/file/d/16Wy8S_9tEVo-ayxfbH7vc6vgnByTTPio/view?usp=sharing";

const links = [
  {
    label: "Devpost",
    href: "https://devpost.com/CarsonLeee?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carson-lee/" },
  { label: "GitHub", href: "https://github.com/CarsonLeee" },
  { label: "Resume", href: RESUME_URL },
];

const about = [
  {
    title: "Who I am",
    image: computerPic,
    body: "A computer science graduate from Western University with a knack for technology. My interest started in childhood with video games and building PCs, and grew into a career that blends technical skill with a creative mindset.",
  },
  {
    title: "What I do",
    image: ideaPic,
    body: "I build production software end to end — React and TypeScript front ends, Node and PostgreSQL behind them, and the AWS infrastructure they run on. Most of that work is the insurance platform at Oneday, now the system of record for the company's entire book of business.",
  },
  {
    title: "Why I do it",
    image: thinkingPic,
    body: "I want technology to make everyday life better. Whether it's an educational game like ClimateHeroes or a practical tool like AI Chef, I enjoy turning big ideas into things people actually use.",
  },
];

const work = [
  {
    company: "Oneday Insurance",
    href: "https://onedayinsurance.ca/",
    location: "Aurora, ON",
    roles: [
      {
        title: "Lead Software Engineer",
        dates: "Jul 2025 – Present",
        points: [
          "Built the company's core insurance platform, replacing the legacy system as the system of record for its entire book of business and now used by 500+ advisors — 70+ screens across application intake, underwriting, and policy servicing over a 111-table database, with 11 role-based workspaces controlling what each type of user can see and do (React, TypeScript, Vite, Node.js, Express, PostgreSQL).",
          "Led the migration off the legacy platform, building the tool that moved 600+ live policies with their payment schedules and outstanding financial obligations, verifying every field against confirmed reference records so not one policy or payment was lost or corrupted in the transfer.",
          "Remediated a full pre-launch security audit ahead of go-live, closing 39 findings in two days across encryption of banking and personal identity data, access-control gaps, session hardening, and removal of personal data from logs.",
          "Built the production AWS environment entirely as code with an automated release pipeline, taking deployments from a manual, error-prone process to a single approved merge, backed by automated testing and 15 health alarms (Terraform, ECS Fargate, GitHub Actions CI/CD).",
          "Integrated 10+ external systems (industry data exchange, credit bureau, e-signature, payments, email/SMS, CRM) behind a common interface that let the company replace its e-signature vendor on a live system with zero downtime.",
          "Led development of an internal AI support platform end to end — retrieval over a curated company knowledge base, response guardrails, confidence-based escalation, and automatic ticket creation with full transcript handoff — deliberately scoped to refuse client data, quoting, and eligibility questions (OpenAI API).",
        ],
      },
      {
        title: "Software Engineer",
        dates: "Jul 2024 – Jul 2025",
        points: [
          "Launched the redesigned life insurance platform for wholesale distribution, enabling 100+ external agents to onboard and write policies at scale.",
          "Owned payment processing end to end on a Zum Rails integration, automating transaction creation, authorization, status tracking, and failed-payment handling, with every failure routed to the right follow-up action in the CRM.",
          "Designed the time-based delinquency logic that drives the customer payment lifecycle, using transaction history and escalation windows to move accounts through missed-payment, NSF, and lapsed states automatically, and to restore them to active once payments are recovered.",
          "Built the identity verification flow behind the application on Equifax, including fallback handling when a verification attempt failed, with secure verification links delivered to applicants by email or SMS.",
        ],
      },
    ],
  },
  {
    company: "INNoVA",
    href: "https://theinnovasolution.ca/",
    location: "Toronto, ON",
    roles: [
      {
        title: "Full Stack Developer",
        dates: "Jul – Nov 2023",
        points: [
          "Led architecture and development of a cross-platform mobile app (React Native, Node.js, Express, AWS), designing the backend to handle high-concurrency usage and carrying the build through to final-stage deployment.",
          "Integrated external APIs for real-time data processing and cut page load times with a layered caching strategy.",
        ],
      },
    ],
  },
  {
    company: "Perfect Marketing",
    href: "https://www.google.com/search?q=perfect+marketing+inc+toronto",
    location: null,
    roles: [
      {
        title: "Digital Marketing Assistant Intern",
        dates: "May – Aug 2021",
        points: [
          "Collaborated cross-functionally with a subsidiary crypto company and helped expand software installations for GPUs.",
        ],
      },
    ],
  },
  {
    company: "YK Air System",
    href: "https://www.facebook.com/p/Y-K-Air-System-100067125819306/",
    location: null,
    roles: [
      {
        title: "Software Developer Intern",
        dates: "May – Aug 2020",
        points: [
          "Automated workflows with Python, cutting manual data entry by 30% and speeding up the database by 40% through SQL optimization and schema restructuring.",
        ],
      },
    ],
  },
];

const projects = [
  {
    name: "ASLearn",
    kind: "Swift mobile app",
    award: null,
    href: "https://youtu.be/r_kv72kp82o",
    image: aslearnGif,
    alt: "ASLearn demo",
    description:
      "An app for learning American Sign Language. Gesture Guess quizzes you with multiple-choice questions, and Sign Sculptor uses machine learning to give real-time feedback on your signing through the camera.",
    tags: ["Swift", "Machine learning", "Firebase"],
  },
  {
    name: "InvestAlytics",
    kind: "Full-stack web app",
    award: null,
    href: "https://youtu.be/gZZPqXrzDvs",
    image: investalyticsGif,
    alt: "InvestAlytics demo",
    description:
      "A MERN app with Python machine learning that predicts end-of-day stock prices. Includes real-time market data, personal watchlists, and a stock evaluation tool built on a weighted scoring system.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Python"],
  },
  {
    name: "ARrive",
    kind: "Augmented reality app",
    award: "1st place overall, hackathon",
    href: "https://www.youtube.com/watch?v=9xUEvrdHoP4",
    image: arriveGif,
    alt: "ARrive demo",
    description:
      "Recognizes AC Transit bus signs in real time and overlays transit information, blending physical and digital worlds to make commuting easier.",
    tags: ["Swift", "ARKit", "Xcode"],
  },
  {
    name: "ClimateHeroes",
    kind: "Unity game",
    award: "1st place in category, hackathon",
    href: "https://www.youtube.com/watch?v=Bvs19RVjYaU",
    image: climateheroesGif,
    alt: "ClimateHeroes demo",
    description:
      "A tower defense game that teaches players about clean energy and how to fight climate change.",
    tags: ["C#", "Unity"],
  },
  {
    name: "AI Chef",
    kind: "Full-stack web app",
    award: null,
    href: "https://github.com/CarsonLeee/AI-Chef",
    image: aichefGif,
    alt: "AI Chef demo",
    description:
      "Generates creative recipes from the ingredients you have, using OpenAI and the Spoonacular API, with an interactive React interface.",
    tags: ["React", "OpenAI", "Spoonacular API"],
  },
  {
    name: "Restaurant Finder",
    kind: "Web app",
    award: null,
    href: "https://github.com/CarsonLeee/Restaurant-Finder",
    image: restaurantfinderGif,
    alt: "Restaurant Finder demo",
    description:
      "Helps you discover places to eat nearby, using Google Maps and a restaurant API for accurate, real-time results.",
    tags: ["JavaScript", "Google Maps API"],
  },
  {
    name: "Personal Website v1",
    kind: "Front-end site",
    award: null,
    href: "https://v1.carsonlee.ca/",
    image: personalwebsiteGif,
    alt: "Personal Website v1 demo",
    description:
      "My first website, with interactive elements and a responsive layout. A key milestone in my coding journey.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = [
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

const tldrParagraphs = [
  "I'm the Lead Software Engineer at Oneday Insurance, where I built the core insurance platform that replaced the legacy system and is now used by 500+ advisors as the system of record for the company's entire book of business.",
  "Computer Science from Western University, two first-place hackathon wins, and a preference for the problems where being wrong is expensive: payments, migrations, and security.",
];

const funFacts = [
  "2x hackathon winner",
  "Lifelong athlete — these days that means MMA",
  "Built nine desktop PCs from the parts up",
  "Was told by a high school CS teacher not to study computer science",
];

function ExternalLink({ href, className, children }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function EmailAction({ label, copied, onCopy }) {
  return (
    <span className="email-action">
      <a className="button button-solid" href={`mailto:${EMAIL}`} onClick={onCopy}>
        {label}
      </a>
      <span className="copy-note" role="status">
        {copied ? `Copied ${EMAIL}` : ""}
      </span>
    </span>
  );
}

function Section({ id, label, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-label`}>
      <p className="section-label" id={`${id}-label`}>
        {label}
      </p>
      <div className="section-body">{children}</div>
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try {
      localStorage.setItem("darkMode", darkMode ? "true" : "false");
    } catch {
      // Storage can be unavailable (private mode, blocked cookies).
      // The theme still applies for this session.
    }
  }, [darkMode]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  // The mailto: link only does something when a mail client is registered,
  // so copy the address as well and say so. Nothing is blocked either way.
  const copyEmail = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(EMAIL).then(
      () => setCopied(true),
      () => {}
    );
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <button type="button" className="wordmark" onClick={scrollToTop}>
            Carson Lee
          </button>
          <nav className="nav" aria-label="Profiles and resume">
            {links.map((link) => (
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
              <span className="theme-icon" key={darkMode ? "sun" : "moon"}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero" aria-label="Introduction">
          <div className="hero-text">
            <p className="hero-eyebrow reveal">
              <img className="hero-bitmoji" src={wavePic} alt="" />
              Hi, I'm Carson.
            </p>
            <h1 className="hero-title reveal reveal-1">
              Software engineer building insurance platforms people run their
              business on.
            </h1>
            <p className="hero-subtext reveal reveal-2">
              Lead Software Engineer at Oneday Insurance. Computer Science,
              Western University.
            </p>
            <div className="hero-actions reveal reveal-3">
              <EmailAction
                label="Email me"
                copied={copied}
                onCopy={copyEmail}
              />
              <ExternalLink className="button button-outline" href={RESUME_URL}>
                View resume
              </ExternalLink>
            </div>
          </div>
          <div className="hero-photo reveal reveal-2">
            <img src={profilePic} alt="Carson Lee" />
          </div>
        </section>

        <div className="view-switch">
          <div
            className="segmented"
            role="group"
            aria-label="Level of detail"
            data-view={view}
          >
            <span className="segment-indicator" aria-hidden="true" />
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
          <p className="view-hint">
            {view === "full"
              ? "Want the short version? Try TLDR."
              : "The short version, in one screen."}
          </p>
        </div>

        <div className="view-panel" key={view}>
          {view === "full" ? (
            <>
            <Section id="about" label="About">
              <div className="about-grid">
                {about.map((item) => (
                  <article className="about-item" key={item.title}>
                    <img className="about-bitmoji" src={item.image} alt="" />
                    <h2 className="about-title">{item.title}</h2>
                    <p className="about-body">{item.body}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="work" label="Work">
              <ol className="work-list">
                {work.map((job) => (
                  <li className="work-job" key={job.company}>
                    <h2 className="work-company-name">
                      <ExternalLink className="work-company" href={job.href}>
                        {job.company}
                      </ExternalLink>
                      {job.location ? (
                        <span className="work-location">{job.location}</span>
                      ) : null}
                    </h2>
                    {job.roles.map((role) => (
                      <div className="work-row" key={role.title}>
                        <p className="work-dates">{role.dates}</p>
                        <div className="work-main">
                          <h3 className="work-role">{role.title}</h3>
                          <ul className="work-points">
                            {role.points.map((point) => (
                              <li key={point.slice(0, 40)}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="projects" label="Projects">
              <div className="project-list">
                {projects.map((project) => (
                  <article className="project" key={project.name}>
                    <ExternalLink className="project-frame" href={project.href}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                      />
                    </ExternalLink>
                    <div className="project-main">
                      <p className="project-kind">{project.kind}</p>
                      <h2 className="project-name">
                        <ExternalLink href={project.href}>
                          {project.name}
                        </ExternalLink>
                      </h2>
                      {project.award ? (
                        <p className="project-award">{project.award}</p>
                      ) : null}
                      <p className="project-description">
                        {project.description}
                      </p>
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
            </Section>

            <Section id="skills" label="Skills">
              <dl className="skills-list">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.group}>
                    <dt className="skill-group">{skill.group}</dt>
                    <dd className="skill-items">{skill.items}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          </>
        ) : (
          <Section id="tldr" label="In short">
            <div className="tldr-grid">
              <div className="tldr-main">
                <img className="tldr-bitmoji" src={thumbsUpPic} alt="" />
                {tldrParagraphs.map((paragraph) => (
                  <p className="tldr-paragraph" key={paragraph.slice(0, 24)}>
                    {paragraph}
                  </p>
                ))}
                <EmailAction
                  label="Let's connect"
                  copied={copied}
                  onCopy={copyEmail}
                />
              </div>
              <aside className="facts-panel">
                <h2 className="facts-title">A few fun facts</h2>
                <ul className="facts-list">
                  {funFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </Section>
          )}
        </div>

        <section className="contact" aria-labelledby="contact-title">
          <h2 className="contact-title" id="contact-title">
            Let's build something.
          </h2>
          <p className="contact-line">
            Reach me at{" "}
            <a href={`mailto:${EMAIL}`} onClick={copyEmail}>
              {EMAIL}
            </a>
            <span className="copy-note" role="status">
              {copied ? "Copied" : ""}
            </span>
          </p>
        </section>
      </main>

      <footer className="footer">
        <button type="button" className="wordmark" onClick={scrollToTop}>
          Carson Lee
        </button>
        <button type="button" className="back-to-top" onClick={scrollToTop}>
          Back to top
        </button>
      </footer>
    </div>
  );
}

export default App;
