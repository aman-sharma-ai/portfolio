import Reveal from "@/components/Reveal";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/Icons";
import { about, education, experience, profile, projects, skills, stats } from "@/lib/data";

const terminal: [string, string][] = [
  ["name", `"${profile.name}"`],
  ["role", '"AI Engineer"'],
  ["company", '"Imbibe Technologies"'],
  ["stack", '["Python", "FastAPI", "Next.js", "MySQL"]'],
  ["focus", '"Agentic AI, RAG"'],
  ["location", `"${profile.location}"`],
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        {index} <span className="text-slate-500">/</span> {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
    </Reveal>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300">
      {children}
    </span>
  );
}

export default function Home() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
            <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-blue-900 to-sky-500 text-xs font-bold text-white">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium text-slate-200 sm:block">{profile.name}</span>
          </a>
          <div className="flex items-center gap-1 md:gap-2">
            <ul className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-sky-200"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-20 pb-20 md:px-8 md:pt-28 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center">
            <Reveal className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-300">
                <span className="pulse-dot size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                {profile.role}
              </p>
              <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-6xl">
                <span className="text-gradient">{profile.headline}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
                >
                  View my work
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                >
                  Get in touch
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2.5 text-slate-400 transition-colors hover:text-white">
                    <GitHubIcon />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2.5 text-slate-400 transition-colors hover:text-white">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Profile summary card styled as a terminal window */}
            <Reveal delay={150} className="min-w-0">
              <div className="card overflow-hidden rounded-2xl shadow-2xl shadow-sky-950/40">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                  <span className="size-2.5 rounded-full bg-slate-700" />
                  <span className="size-2.5 rounded-full bg-slate-700" />
                  <span className="size-2.5 rounded-full bg-slate-700" />
                  <span className="ml-3 font-mono text-xs text-slate-500">profile.json</span>
                </div>
                <pre className="p-5 font-mono text-[11.5px] leading-7 whitespace-pre-wrap break-words text-slate-300 sm:text-[13px]">
                  <span>{"{"}</span>
                  {terminal.map(([key, value], i) => (
                    <span key={key} className="block pl-8 -indent-3">
                      <span className="text-sky-300">&quot;{key}&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-300">{value}</span>
                      {i < terminal.length - 1 && <span className="text-slate-500">,</span>}
                    </span>
                  ))}
                  <span>{"}"}</span>
                </pre>
              </div>
            </Reveal>
          </div>

          {/* Key figures */}
          <div className="relative mx-auto max-w-6xl px-5 pb-20 md:px-8">
            <Reveal>
              <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4" style={{ gap: "1px" }}>
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse justify-end bg-ink p-5 md:p-6">
                    <dt className="mt-2 text-xs leading-snug text-slate-500">{s.label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <SectionHeading index="01" eyebrow="About" title="Engineering AI products, end to end" />
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
                {about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <p>
                  Current focus: <span className="text-slate-200">{profile.focus}</span>.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="card rounded-2xl p-6">
                  <p className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">Education</p>
                  <p className="mt-3 font-medium text-white">{education.degree}</p>
                  <p className="mt-1 text-sm text-slate-400">{education.school}</p>
                  <div className="mt-4 flex items-center justify-between font-mono text-xs text-slate-500">
                    <span>{education.period}</span>
                    <span>{education.detail}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-sm text-slate-400">
                    <MapPinIcon className="size-4 text-accent" />
                    {profile.location}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <SectionHeading index="02" eyebrow="Experience" title="Where I have delivered" />
            <ol className="relative space-y-14 border-l border-line pl-6 md:pl-10">
              {experience.map((role) => (
                <li key={role.company} className="relative">
                  <span
                    className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-sky-400 ring-4 ring-sky-400/15 md:-left-[45px]"
                    aria-hidden="true"
                  />
                  <Reveal>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {role.title} <span className="text-slate-500">at</span> {role.company}
                      </h3>
                      <p className="font-mono text-xs text-slate-500">{role.period}</p>
                    </div>
                    <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">{role.summary}</p>
                    {role.points && (
                      <ul className="mt-4 max-w-3xl space-y-2 text-slate-400">
                        {role.points.map((pt) => (
                          <li key={pt} className="flex gap-3">
                            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                  {role.projects && (
                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                      {role.projects.map((proj, i) => (
                        <Reveal key={proj.name} delay={i * 100}>
                          <article className="card flex h-full flex-col rounded-xl p-5">
                            <p className="font-mono text-[11px] tracking-wider text-accent uppercase">{proj.context}</p>
                            <h4 className="mt-2 font-semibold text-white">{proj.name}</h4>
                            <ul className="mt-3 flex-1 space-y-2 text-sm leading-relaxed text-slate-400">
                              {proj.points.map((pt) => (
                                <li key={pt}>{pt}</li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {proj.stack.map((t) => (
                                <Tag key={t}>{t}</Tag>
                              ))}
                            </div>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-slate-500">Client projects are proprietary, so their source code is not public.</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <SectionHeading index="03" eyebrow="Projects" title="Open-source work" />
            {featured && (
              <Reveal>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card group relative block overflow-hidden rounded-2xl p-7 md:p-10"
                >
                  <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-sky-500/20 blur-3xl" aria-hidden="true" />
                  <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Featured · {featured.highlight}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{featured.name}</h3>
                      <p className="mt-4 leading-relaxed text-slate-400">{featured.description}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {featured.stack.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-slate-200 group-hover:text-white">
                      <GitHubIcon className="size-4" /> View repository
                      <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            )}
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.name} delay={i * 100}>
                  <a href={p.href} target="_blank" rel="noreferrer" className="card group flex h-full flex-col rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-white">{p.name}</h3>
                      <ArrowUpRightIcon className="size-4 shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" />
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-accent">{p.highlight}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <SectionHeading index="04" eyebrow="Skills" title="Tools I work with" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((g, i) => (
                <Reveal key={g.group} delay={(i % 3) * 100} className={i === 0 ? "lg:col-span-2" : ""}>
                  <div className="card h-full rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-white">{g.group}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span key={s} className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[13px] text-slate-300 ring-1 ring-line">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-br from-blue-950/80 via-ink to-sky-950/60 p-8 md:p-14">
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative max-w-2xl">
                  <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">05 / Contact</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    Let&apos;s build something useful.
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-400">
                    I am open to conversations about AI engineering roles, LLM applications and data platforms. The quickest way to reach me is by email or LinkedIn.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
                    >
                      <MailIcon className="size-4" /> {profile.email}
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-ink/40 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                    >
                      <LinkedInIcon className="size-4" /> LinkedIn
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-ink/40 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                    >
                      <GitHubIcon className="size-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 md:flex-row md:px-8">
          <p>{profile.name}. Built with Next.js and Tailwind CSS.</p>
          <a href="#top" className="transition-colors hover:text-slate-300">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
