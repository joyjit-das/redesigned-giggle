import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Rocket,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    role: "Content Intelligence Intern",
    org: "Module Xero",
    date: "Apr 2026 - Present",
    icon: Sparkles,
    type: "AI & Content",
  },
  {
    role: "Student Developer Champion",
    org: "UiPath",
    date: "Apr 2026 - Present",
    icon: Code2,
    type: "Developer Advocacy",
  },
  {
    role: "Core Team Member",
    org: "AWS Student Builder Group",
    date: "Nov 2025 - Present",
    icon: Cloud,
    type: "Cloud Community",
  },
  {
    role: "Deputy Campus Director",
    org: "Hult Prize TIU",
    date: "Nov 2025 - Present",
    icon: Rocket,
    type: "Entrepreneurship",
  },
  {
    role: "Lead",
    org: "Sustainovate",
    date: "Jun 2025 - Present",
    icon: Users,
    type: "Sustainability",
  },
  {
    role: "Data Privacy Research Intern",
    org: "Entiovi Technologies",
    date: "Jul 2025 - Sep 2025",
    icon: Network,
    type: "ML Research",
  },
  {
    role: "Founding Member & CTO",
    org: "GreenLeaf",
    date: "Nov 2024 - Sep 2025",
    icon: Globe2,
    type: "Startup",
  },
];

const certifications = [
  "Develop Gen AI Apps with Gemini and Streamlit",
  "The Basics of Google Cloud Compute",
  "Cloud Speech API: 3 Ways",
  "App Engine: 3 Ways",
  "SBI Youth Ideathon",
];

const skills = [
  {
    title: "Artificial Intelligence",
    desc: "Exploring intelligent systems that turn ambitious ideas into useful, scalable products.",
    icon: Sparkles,
  },
  {
    title: "Cloud Computing",
    desc: "Learning and building with cloud-native platforms, with a strong focus on Google Cloud and AWS.",
    icon: Cloud,
  },
  {
    title: "Community Building",
    desc: "Creating spaces where students, builders, and founders can learn and make meaningful things together.",
    icon: Users,
  },
  {
    title: "Leadership",
    desc: "Leading cross-functional student teams across sustainability, technology, and entrepreneurship.",
    icon: Rocket,
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Mark() {
  return (
    <div className="relative h-9 w-9 overflow-hidden rounded-full shadow-[0_0_30px_rgba(255,255,255,.22)]">
      <img
        src="joyjit.jpg"
        alt="Joyjit Das"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-white/45">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_#93c5fd]" />
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Experience", "Skills", "Education", "Contact"];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08090b] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,.30),transparent_38%),radial-gradient(circle_at_85%_35%,rgba(8,145,178,.16),transparent_26%),linear-gradient(#08090b_0%,rgba(8,9,11,.88)_55%,#08090b_100%)]" />
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="absolute left-[12%] top-40 h-56 w-56 rounded-full bg-blue-500/10 blur-[90px]" />
      </div>
      <div className="pointer-events-none fixed inset-y-0 left-1/2 z-[1] hidden w-px -translate-x-[36rem] bg-white/[.07] md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-1/2 z-[1] hidden w-px translate-x-[36rem] bg-white/[.07] md:block" />

      <nav className="relative z-20 mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" aria-label="Joyjit Das home">
          <Mark />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/55 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="mailto:joyjitdas09.pkt@gmail.com"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-blue-100 md:flex"
        >
          Let's connect <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {menuOpen && (
        <div className="relative z-20 mx-6 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5"
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-20 text-center md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-7 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-xl"
        >
          Building at the intersection of AI, cloud & community
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.07em] md:text-8xl"
        >
          Building tomorrow.
          <br />
          <span className="shine">Starting today.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg"
        >
          I'm Joyjit Das, a computer science student, builder, and community
          leader turning ambitious ideas into meaningful technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#experience"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-100"
          >
            Explore my journey <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="/Profile.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> View profile
          </a>
        </motion.div>
      </section>

      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24"
      >
        <Reveal>
          <div className="liquid-glass rounded-3xl">
            <div className="flex h-11 items-center border-b border-white/10 px-5">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white/35">
                joyjit.profile
              </span>
            </div>
            <div className="grid md:grid-cols-[.72fr_1.28fr]">
              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
                <div className="h-28 w-28 overflow-hidden rounded-3xl shadow-[0_20px_70px_rgba(37,99,235,.32)]">
                  <img
                    src="/joyjit.jpg"
                    alt="Joyjit Das"
                    className="h-full w-full object-cover"
                  />
                </div>{" "}
                <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                  Joyjit Das
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  AI builder. Cloud learner.
                  <br />
                  Community leader.
                </p>
                <div className="mt-7 space-y-3 text-sm text-white/55">
                  <a
                    href="mailto:joyjitdas09.pkt@gmail.com"
                    className="flex items-center gap-3 hover:text-white"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joyjit-das-ai"
                    target="_blank"
                    className="flex items-center gap-3 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" /> Kolkata, India
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <Eyebrow>About me</Eyebrow>
                <h3 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.04em] md:text-5xl">
                  Students don't have to wait to{" "}
                  <span className="text-blue-300">
                    build something meaningful.
                  </span>
                </h3>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                  I work where technology, teamwork, and student
                  entrepreneurship meet. From leading campus communities and
                  collaborating with founders to researching data privacy and
                  experimenting with startups, I care about creating useful
                  things with people who think boldly.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    ["7", "Roles"],
                    ["5", "Certifications"],
                    ["4", "Languages"],
                  ].map(([n, l]) => (
                    <div
                      key={l}
                      className="rounded-2xl border border-white/10 bg-white/[.025] p-4"
                    >
                      <div className="text-2xl font-semibold">{n}</div>
                      <div className="mt-1 text-xs text-white/40">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="experience"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28"
      >
        <Reveal className="max-w-2xl">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] md:text-6xl">
            Learning by leading.
            <br />
            <span className="text-white/35">Growing by building.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {experiences.map((item, i) => (
            <Reveal
              key={item.org}
              delay={i * 0.04}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <article className="liquid-glass group rounded-2xl p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[.055] md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-blue-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-blue-200/70">
                        {item.type}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-white/45">{item.org}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/35">
                    {item.date}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Reveal>
            <Eyebrow>Focus areas</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] md:text-6xl">
              Curious across disciplines.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              I am especially drawn to the space where AI, cloud, and Web3
              intersect. It's where the future is being written, and I want to
              help write it.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <Reveal key={skill.title} delay={i * 0.06}>
                <div className="liquid-glass h-full rounded-2xl p-6">
                  <skill.icon className="h-6 w-6 text-blue-200" />
                  <h3 className="mt-8 text-lg font-semibold">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {skill.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28"
      >
        <Reveal>
          <Eyebrow>Education & credentials</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] md:text-6xl">
            Always in learning mode.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="liquid-glass h-full rounded-3xl p-7 md:p-8">
              <GraduationCap className="h-7 w-7 text-blue-200" />
              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-xs text-white/35">2024 - 2028</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    BTech, CSE (AI & Machine Learning)
                  </h3>
                  <p className="mt-2 text-sm text-white/45">
                    Techno India University
                  </p>
                </div>
                <div className="border-t border-white/10 pt-8">
                  <p className="text-xs text-white/35">2024 - 2028</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    BS, Data Science & Applications
                  </h3>
                  <p className="mt-2 text-sm text-white/45">
                    Indian Institute of Technology, Madras
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="liquid-glass h-full rounded-3xl p-7 md:p-8">
              <Award className="h-7 w-7 text-blue-200" />
              <h3 className="mt-12 text-xl font-semibold">
                Selected certifications
              </h3>
              <div className="mt-6 space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.025] p-3 text-sm text-white/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-y border-white/10 py-10 text-sm font-semibold text-white/30 md:justify-between">
            {[
              "UiPath",
              "AWS",
              "Hult Prize",
              "Sustainovate",
              "Module Xero",
              "GreenLeaf",
            ].map((x) => (
              <span key={x} className="transition hover:text-white">
                {x}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-32"
      >
        <Reveal>
          <div className="liquid-glass relative rounded-[2rem] px-6 py-20 text-center md:px-12 md:py-28">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_0%,rgba(96,165,250,.22),transparent_70%)]" />
            <div className="relative">
              <div className="flex justify-center">
                <Eyebrow>Let's build</Eyebrow>
              </div>
              <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-7xl">
                Exploring an ambitious idea?
                <br />
                <span className="shine">I'd love to connect.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/50">
                I'm always excited to meet builders, founders, researchers, and
                communities working on meaningful technology.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:joyjitdas09.pkt@gmail.com"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-blue-100"
                >
                  <Mail className="h-4 w-4" /> Send an email
                </a>
                <a
                  href="https://www.linkedin.com/in/joyjit-das-ai"
                  target="_blank"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn{" "}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/10 px-6 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Mark /> <span>Joyjit Das · Kolkata, India</span>
        </div>
        <div className="flex gap-5">
          <a
            href="mailto:joyjitdas09.pkt@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>
          <a href="tel:+919123872011" className="hover:text-white">
            Phone
          </a>
          <a
            href="https://www.linkedin.com/in/joyjit-das-ai"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
