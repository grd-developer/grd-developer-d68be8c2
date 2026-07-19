import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Smartphone,
  Layout,
  PenTool,
  Terminal,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

const EMAIL = "hello@ghulamrasool.dev";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    copy: "Custom, high-performance iOS and Android applications built with Flutter and native tooling.",
  },
  {
    icon: Layout,
    title: "Web Design & Development",
    copy: "Modern, fully responsive, and fast-loading websites engineered for scale and clarity.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    copy: "Intuitive user interfaces, wireframes, and smooth user journeys grounded in research.",
  },
  {
    icon: Terminal,
    title: "Automation & Scripting",
    copy: "Custom Python scripts and backend automation that remove repetitive work.",
  },
];

const PROJECTS = [
  {
    title: "Advanced Point-of-Sale Utility",
    tags: ["Flutter", "Dart", "UI/UX"],
    description:
      "Offline-first POS with inventory, receipts, and multi-terminal sync for retail operators.",
    accent: "from-teal-500/30 to-cyan-500/10",
  },
  {
    title: "Automation & Data Scraping Engine",
    tags: ["Python", "Playwright", "APIs"],
    description:
      "Headless scraping pipeline with scheduling, proxy rotation, and structured exports.",
    accent: "from-cyan-400/30 to-sky-500/10",
  },
  {
    title: "Fitness Coaching Mobile App",
    tags: ["Flutter", "Firebase", "UI/UX"],
    description:
      "Personalized training plans, progress tracking, and coach chat inside a premium mobile shell.",
    accent: "from-emerald-400/25 to-teal-500/10",
  },
  {
    title: "SaaS Marketing Website",
    tags: ["React", "Web Design", "SEO"],
    description:
      "High-conversion marketing surface with editorial layouts and sub-second load times.",
    accent: "from-sky-400/25 to-cyan-500/10",
  },
  {
    title: "Invoice Automation Suite",
    tags: ["Python", "Automation", "APIs"],
    description:
      "End-to-end billing pipeline: PDF parsing, ledger sync, and Slack notifications.",
    accent: "from-teal-400/25 to-emerald-500/10",
  },
  {
    title: "Real Estate Listings App",
    tags: ["Flutter", "Maps", "UX"],
    description:
      "Map-first property discovery with saved searches and instant agent messaging.",
    accent: "from-cyan-500/25 to-teal-500/10",
  },
];

function PortfolioPage() {
  return (
    <main id="home" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-sm font-semibold tracking-tight">
          Ghulam Rasool
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px] shadow-primary" />
          Available for freelance projects
        </span>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
            Ghulam Rasool.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I am a professional Full-Stack App Developer and UI/UX Specialist crafting premium
          mobile and web experiences that blend speed, aesthetics, and functionality.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-teal hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Who I Am</h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I am Ghulam Rasool, a dedicated developer and designer focused on building intuitive
            digital products. From automation scripts to complete mobile applications, I approach
            every project with clean code and a user-first mindset to deliver high-quality,
            scalable results.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[
              { k: "5+", v: "Years crafting" },
              { k: "40+", v: "Projects shipped" },
              { k: "100%", v: "Client focused" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-foreground sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Expertise & Services
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A selection of recent freelance work across mobile, web, and automation.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.06),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl border border-border/70 bg-surface/60 backdrop-blur-sm" />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/95 via-background/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-all hover:gap-2.5">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "New project inquiry"));
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Have a project in mind? Drop a message or send an email directly.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-12 space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your full name" required />
            <Field name="email" label="Email" type="email" placeholder="you@company.com" required />
          </div>
          <Field name="subject" label="Subject" placeholder="Project inquiry" required />
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me a bit about your project, timeline, and goals..."
              className="w-full resize-none rounded-lg border border-border bg-input/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-teal hover:-translate-y-0.5 sm:w-auto"
          >
            {status === "sent" ? "Opening your mail app…" : "Send Message"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Or email me directly at:{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        className="w-full rounded-lg border border-border bg-input/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © 2026 Ghulam Rasool. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" /> Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}
