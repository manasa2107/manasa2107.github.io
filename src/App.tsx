import type { ReactNode } from "react";
import {
  about,
  certifications,
  contact,
  education,
  experience,
  hero,
  leadership,
  projects,
  skillGroups,
} from "./data/content";

const navItems = [
  ["Summary", "#summary"],
  ["Experience", "#experience"],
  ["Publications", "#publications"],
  ["Tech Stack", "#tech-stack"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Volunteer", "#volunteer"],
  ["Activities", "#activities"],
  ["Contact", "#contact"],
];

const systemNodes = [
  ["LLM", "Heterogeneous models"],
  ["RAG", "Knowledge-grounded AI"],
  ["FL", "Federated inference"],
  ["UX", "Human-centered studies"],
  ["Cloud", "Deployable systems"],
  ["Data", "Evaluation loops"],
];

const summaryStrengths = [
  ["🧠", "LLM Systems", "RAG, prompt engineering, MCP, Claude, Codex"],
  ["🔐", "Privacy-Preserving AI", "Federated inference and differential privacy"],
  ["⚙️", "Full-Stack Engineering", "React, Node, Django, Flask, databases"],
  ["☁️", "Cloud ML Delivery", "Vertex AI, AWS, GCP, Docker, Kubernetes"],
];

const publicationItems = [
  {
    title: "Brain computer interface: a survey",
    venue: "Academic Press · Advances in Bioelectromagnetism · 2025",
    description:
      "Surveyed BCI foundations, EEG-based control, neurorehabilitation, assistive communication, mental health monitoring, gaming, education, and AI-enabled wearable BCI trends.",
    tags: ["Brain-Computer Interface", "AI", "Healthcare"],
    icon: "🧠",
    url: "https://scholar.google.com/scholar?q=Brain+computer+interface%3A+a+survey+Yagna+Manasa",
  },
  {
    title: "Cognitive Reserve Measurement: A Mobile Application and a Framework for Detecting, Monitoring, and Enhancing Cognitive Resilience",
    venue: "IEEE International Conference on Omni-Layer Intelligent Systems · 2025",
    description:
      "Presented a mobile app for tracking behaviors linked to cognitive resilience through journaling, assessments, visualization, and cognitive training games.",
    tags: ["Mobile Health", "Cognitive Reserve", "Data Visualization"],
    icon: "📱",
    url: "https://scholar.google.com/scholar?q=Cognitive+Reserve+Measurement%3A+A+Mobile+Application+and+a+Framework+for+Detecting%2C+Monitoring%2C+and+Enhancing+Cognitive+Resilience",
  },
  {
    title: "AI-Enabled Exoskeletal Robotics for Enhancing Mobility, Bone Regeneration, and Functional Rehabilitation in Osteoporosis",
    venue: "Context Sensitive Health Informatics: AI for Social Good · 2025",
    description:
      "Reviewed AI-enabled exoskeletal robotics for mobility, gait analysis, functional rehabilitation, and osteoporosis care.",
    tags: ["Exoskeletons", "AI for Health", "Rehabilitation"],
    icon: "🦾",
    url: "https://scholar.google.com/scholar?q=AI-Enabled+Exoskeletal+Robotics+for+Enhancing+Mobility%2C+Bone+Regeneration%2C+and+Functional+Rehabilitation+in+Osteoporosis",
  },
  {
    title: "Gender Differences in Emotional Responses to Stress During Problem Solving",
    venue: "International Conference on Computational Science and Computational Intelligence · 2023",
    description:
      "Investigated how men and women experience and express emotional stress while engaging in problem-solving tasks.",
    tags: ["Stress Analysis", "Behavioral Research", "HCI"],
    icon: "📊",
    url: "https://scholar.google.com/scholar?q=Gender+Differences+in+Emotional+Responses+to+Stress+During+Problem+Solving",
  },
  {
    title: "Perspective of Family and Staff About Using Robots",
    venue: "HIMS / CSCE · 2024",
    description:
      "Explored perceptions, hopes, concerns, and expectations of family members and hospital staff toward robotic assistants in caregiving settings.",
    tags: ["Care Robotics", "User Perception", "Human-Robot Interaction"],
    icon: "🤖",
    url: "https://scholar.google.com/scholar?q=Perspective+of+Family+and+Staff+About+Using+Robots",
  },
];

const volunteerItems = [
  {
    title: "Graduate Student Representative",
    org: "International Club — University of Minnesota Duluth",
    detail: leadership,
    icon: "🌐",
  },
  {
    title: "Graduate Student Mentor",
    org: "University of Minnesota Duluth",
    detail: "Supported first-year graduate students with research direction, academic planning, and career guidance.",
    icon: "🎓",
  },
];

const activityItems = [
  {
    title: "Community Engagement",
    detail: "International student community engagement and event participation.",
    icon: "🤝",
  },
  {
    title: "Responsible Research",
    detail: "Research ethics, reproducibility, and human-subjects training for responsible computing work.",
    icon: "🛡️",
  },
  {
    title: "Cross-Disciplinary Collaboration",
    detail: "Cross-disciplinary collaboration across Computer Science, Electrical Engineering, Civil Engineering, and healthcare contexts.",
    icon: "🔬",
  },
];

const projectImages = [
  "/project-pacr-security.svg",
  "/project-federated-llm.svg",
  "/project-healthcare-chatbot.svg",
  "/project-caregiver-app.svg",
  "/project-churn-ml.svg",
];

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.4rem] border border-[#243151] bg-[#111827]/70 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="mb-16 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.34em] text-cyan-400">// {eyebrow}</p>
      <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">
        {title} {accent ? <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-amber-200 bg-clip-text text-transparent">{accent}</span> : null}
      </h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="ai-engineer-theme min-h-screen bg-[#050713] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_12%,rgba(20,184,166,0.2),transparent_31%),radial-gradient(circle_at_86%_22%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_72%_82%,rgba(245,158,11,0.12),transparent_28%),linear-gradient(180deg,#050713_0%,#08111f_48%,#040711_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(45,212,191,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b18]/82 backdrop-blur-2xl">
        <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <a href="#" className="text-3xl font-black tracking-tight text-teal-300">YM.</a>
          <div className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-2 xl:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-400 transition hover:text-cyan-300">{label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-6 py-3 font-mono text-sm text-cyan-300">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                Open to research, AI, and full-stack roles
              </p>
              <h1 className="mt-10 max-w-5xl text-[clamp(2.85rem,6vw,5.9rem)] font-black leading-[1.06] tracking-tight text-white">
                Hi, I&apos;m <span className="bg-gradient-to-r from-teal-200 via-sky-300 to-amber-200 bg-clip-text text-transparent">Yagna Manasa Boyapati</span>
              </h1>
              <p className="mt-8 max-w-5xl text-2xl leading-[1.8] text-slate-400">I build full-stack products and AI systems for healthcare, research, and human-centered technology.</p>
              <p className="mt-5 font-mono text-base text-sky-400">Full Stack AI Engineer · Applied ML Developer · HCI & Robotics Researcher</p>
              <div className="mt-12 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl bg-gradient-to-r from-teal-500 to-sky-500 px-8 py-4 text-base font-bold text-white shadow-[0_20px_70px_rgba(20,184,166,0.28)] transition hover:-translate-y-1">View Projects ↓</a>
                <a href="#contact" className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/40">Get in Touch</a>
              </div>
            </div>

            <Panel className="system-map relative min-h-[33rem] overflow-hidden p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.26),transparent_30%)]" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">System map</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Privacy-first AI ecosystem</h2>
                </div>
                <div className="signal-badge" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="system-stage relative mt-10 grid min-h-96 place-items-center">
                <div className="system-ring ring-a" />
                <div className="system-ring ring-b" />
                <div className="system-ring ring-c" />
                <div className="z-10 grid h-40 w-40 place-items-center rounded-full border border-cyan-200/45 bg-[#061425] text-center shadow-[0_0_110px_rgba(34,211,238,0.36)]">
                  <div>
                    <span className="block text-4xl font-black text-cyan-100">AI</span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">Research OS</span>
                  </div>
                </div>
                {systemNodes.map(([title, detail], index) => (
                  <div
                    key={title}
                    className={`system-node absolute rounded-2xl border border-cyan-100/25 bg-slate-950/90 px-4 py-3 shadow-strong ${["left-2 top-5", "right-0 top-12", "left-0 bottom-24", "right-4 bottom-8", "right-1/2 top-1/2 translate-x-[11.5rem] -translate-y-1/2", "left-1/2 top-0 -translate-x-1/2"][index]}`}
                    style={{ animationDelay: `${index * 0.22}s` }}
                  >
                    <p className="text-sm font-black text-cyan-50">{title}</p>
                    <p className="mt-1 text-xs font-medium text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </section>

        <section id="summary" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="profile" title="Professional" accent="Summary" />
            <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <Panel className="grid gap-8 p-8 text-lg leading-9 text-slate-300 sm:grid-cols-[12rem_1fr] sm:items-center">
                <img src="/profile-photo.jpeg" alt={hero.name} className="profile-photo h-48 w-48 rounded-3xl border border-teal-200/25 bg-white object-cover shadow-[0_22px_70px_rgba(20,184,166,0.24)]" />
                <div>{about.map((p) => <p key={p} className="mb-5 last:mb-0">{p}</p>)}</div>
              </Panel>
              <div className="grid gap-5 sm:grid-cols-2">
                {summaryStrengths.map(([icon, title, detail]) => (
                  <Panel key={title} className="tech-strength p-7">
                    <p className="strength-icon text-4xl">{icon}</p>
                    <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
                  </Panel>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="career" title="Professional" accent="Experience" />
            <div className="relative pl-12 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-indigo-500/50">
              {experience.map((job) => (
                <div key={job.title + job.org} className="relative mb-14">
                  <span className="absolute -left-[2.72rem] top-2 h-5 w-5 rounded-full border-4 border-indigo-400 bg-[#070b18]" />
                  <p className="mb-4 font-mono text-sm text-cyan-400">{job.period}</p>
                  <Panel className="p-8">
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="mt-3 text-lg text-violet-400">{job.org}</p>
                    <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-400">
                      {job.bullets.map((bullet) => <li key={bullet}>▹ {bullet}</li>)}
                    </ul>
                  </Panel>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="publications" title="Research" accent="Work" />
            <div className="mb-8 text-center">
              <a href={contact.scholar} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 font-bold text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200">
                <span aria-hidden="true">🎓</span> Google Scholar Profile
              </a>
            </div>
            <div className="grid gap-6">
              {publicationItems.map((item) => (
                <Panel key={item.title} className="p-8">
                  <div className="flex gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-300/12 text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold leading-snug text-white">{item.title}</h3>
                      <p className="mt-4 text-lg italic text-violet-400">{item.venue}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-lg leading-8 text-slate-400">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm text-slate-300">
                    {item.tags.map((tag) => <span key={tag}>▣ {tag}</span>)}
                    <a href={item.url} target="_blank" rel="noreferrer" className="font-sans font-bold text-cyan-300 transition hover:text-cyan-100">View paper ↗</a>
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="tech-stack" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="expertise" title="Technical" accent="Skills" />
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <Panel key={group.label} className="min-h-72 p-8">
                  <div className={`grid h-14 w-14 place-items-center rounded-xl text-2xl ${["bg-violet-500", "bg-cyan-500", "bg-orange-500", "bg-fuchsia-500", "bg-teal-500"][index % 5]}`}>▣</div>
                  <h3 className="mt-5 text-2xl font-bold text-white">{group.label}</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((skill) => <span key={skill} className="rounded-lg border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 font-semibold text-slate-400">{skill}</span>)}
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="academics" title="" accent="Education" />
            <div className="grid gap-6">
              {education.map((item) => (
                <Panel key={item.school} className="flex gap-7 p-8">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-violet-500 text-2xl">🎓</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                    <p className="mt-3 text-xl text-cyan-400">{item.school}</p>
                    <p className="mt-3 font-mono text-slate-500">{item.period}</p>
                    <p className="mt-4 text-lg text-slate-400">{item.detail}</p>
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="portfolio" title="Featured" accent="Projects" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Panel key={project.name} className="overflow-hidden">
                  <img src={projectImages[index]} alt="" className="h-48 w-full object-cover" />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold leading-snug text-white">{project.name}</h3>
                    <p className="mt-5 text-lg leading-8 text-slate-400">{project.description}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((tech) => <span key={tech} className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 font-mono text-sm text-cyan-300">{tech}</span>)}
                    </div>
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="credentials" title="" accent="Certifications" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification, index) => (
                <Panel key={certification} className="p-10 text-center">
                  <p className="text-4xl">{index % 3 === 0 ? "🏅" : index % 3 === 1 ? "🤖" : "💼"}</p>
                  <h3 className="mt-6 text-xl font-bold text-white">{certification}</h3>
                  <p className="mt-4 text-cyan-400">Credential</p>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="service" title="Volunteer" accent="Experience" />
            <div className="grid gap-6 md:grid-cols-2">
              {volunteerItems.map((item) => (
                <Panel key={item.title} className="engineer-card grid gap-6 p-8 sm:grid-cols-[4.5rem_1fr]">
                  <div className="engineer-icon" aria-hidden="true">
                    <span>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-cyan-300">{item.org}</p>
                    <p className="mt-5 text-lg leading-8 text-slate-300">{item.detail}</p>
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="beyond academics" title="Extra Curricular" accent="Activities" />
            <div className="grid gap-6 md:grid-cols-3">
              {activityItems.map((item) => (
                <Panel key={item.title} className="engineer-card p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="engineer-icon compact" aria-hidden="true">
                      <span>{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-lg leading-8 text-slate-300">{item.detail}</p>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 sm:px-8">
          <Panel className="mx-auto max-w-5xl bg-gradient-to-br from-cyan-300/12 via-white/[0.06] to-indigo-400/12 p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Let’s build useful AI software.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">Open to research collaborations, AI/full-stack engineering roles, and applied ML projects.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-[#061018]">LinkedIn</a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">GitHub</a>
              <a href={contact.scholar} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">Scholar</a>
            </div>
          </Panel>
        </section>
      </main>
    </div>
  );
}
