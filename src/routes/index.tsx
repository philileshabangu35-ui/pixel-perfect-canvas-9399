import { createFileRoute } from "@tanstack/react-router";
import {
  Mail, Phone, Download, Linkedin, Github, GraduationCap, Award, User, Monitor, Sparkles, Users, Target,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharon Shabangu — Portfolio & CV" },
      { name: "description", content: "Sharon Shabangu: self-motivated South African candidate seeking internship and job opportunities. Skills, education, ICDL and AI certifications." },
      { property: "og:title", content: "Sharon Shabangu — Portfolio & CV" },
      { property: "og:description", content: "Skills, education, certifications and contact details for Sharon Shabangu." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const rated = [
  ["Communication", 95], ["Listening", 95], ["Critical Thinking", 90], ["Problem Solving", 95],
] as const;
const traits = ["Teamwork", "Adaptability", "Reliability", "Self-Motivation", "Time Management", "Responsibility", "Willingness to Learn"];
const computer = ["Online Essentials", "Computer Essentials", "Word Processing", "Spreadsheets", "Using Databases", "Presentation", "IT Security"];

function Heading({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 font-display text-2xl text-primary">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-muted text-accent" aria-hidden>{icon}</span>
      {children}
    </h2>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      {/* First screen */}
      <section aria-label="Introduction and skills" className="flex min-h-screen flex-col justify-center gap-14 py-16">
        <header className="animate-rise grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent">Internship & job applicant</p>
            <h1 className="font-display text-5xl leading-[1.05] text-primary md:text-7xl">Sharon<br />Shabangu</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Seeking a challenging career opportunity to develop skills, gain professional experience, and contribute positively to an organisation.
            </p>
            <div className="no-print mt-8 flex flex-wrap gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring">
                <Download size={16} aria-hidden /> Download CV
              </button>
              <a href="#" aria-label="LinkedIn profile (placeholder — link to be added)" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition hover:border-accent hover:text-accent">
                <Linkedin size={16} aria-hidden /> LinkedIn <span className="text-xs text-muted-foreground">[to be added]</span>
              </a>
              <a href="#" aria-label="GitHub profile (placeholder — link to be added)" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition hover:border-accent hover:text-accent">
                <Github size={16} aria-hidden /> GitHub <span className="text-xs text-muted-foreground">[to be added]</span>
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-4 rounded-3xl bg-card p-6 text-sm shadow-sm ring-1 ring-border">
            {[["Born", "17 July 2001"], ["Nationality", "South African"], ["Home language", "isiSwati"], ["Preferred language", "English"]].map(([k, v]) => (
              <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>
            ))}
          </dl>
        </header>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-rise" style={{ animationDelay: "150ms" }}>
            <Heading icon={<User size={18} />}>About Me</Heading>
            <p className="text-lg leading-relaxed">
              Enthusiastic, self-motivated, reliable, responsible, hardworking, adaptable, and committed to continuous learning.
            </p>
            <div className="mt-8">
              <Heading icon={<Users size={18} />}>Personal Strengths</Heading>
              <ul className="flex flex-wrap gap-2">
                {traits.map((t) => <li key={t} className="rounded-full bg-muted px-4 py-2 text-sm">{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="animate-rise" style={{ animationDelay: "300ms" }}>
            <Heading icon={<Target size={18} />}>Skills</Heading>
            <ul className="space-y-5">
              {rated.map(([name, pct], i) => (
                <li key={name}>
                  <div className="mb-2 flex justify-between text-sm font-medium"><span>{name}</span><span className="text-muted-foreground">{pct}%</span></div>
                  <div className="h-2 rounded-full bg-muted" role="progressbar" aria-label={name} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                    <div className="animate-grow h-full rounded-full bg-accent" style={{ width: `${pct}%`, animationDelay: `${400 + i * 120}ms` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Second screen */}
      <section aria-label="Qualifications and contact" className="flex min-h-screen flex-col justify-center gap-12 border-t border-border py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Heading icon={<GraduationCap size={18} />}>Education</Heading>
            <ul className="space-y-4">
              <li className="border-l-2 border-accent pl-4"><p className="font-semibold">Khetsalwati High School</p><p className="text-sm text-muted-foreground">Grade 10</p></li>
              <li className="border-l-2 border-accent pl-4"><p className="font-semibold">ABET</p><p className="text-sm text-muted-foreground">Level 4</p></li>
            </ul>
          </div>
          <div>
            <Heading icon={<Award size={18} />}>Certifications</Heading>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 rounded-2xl bg-card p-4 ring-1 ring-border"><Award size={18} className="text-accent" aria-hidden /> ICDL</li>
              <li className="flex items-center gap-3 rounded-2xl bg-card p-4 ring-1 ring-border"><Sparkles size={18} className="text-accent" aria-hidden /> AI Certificate</li>
            </ul>
          </div>
          <div>
            <Heading icon={<Monitor size={18} />}>Computer Skills</Heading>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {computer.map((c) => <li key={c} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-muted p-8">
            <Heading icon={<Users size={18} />}>References</Heading>
            <p className="font-semibold">Brenda Shabangu</p>
            <p className="text-sm text-muted-foreground">Mother</p>
            <a href="tel:0721530450" className="mt-3 inline-flex items-center gap-2 hover:text-accent"><Phone size={16} aria-hidden /> 072 153 0450</a>
          </div>
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
            <h2 className="mb-5 font-display text-2xl">Contact</h2>
            <ul className="space-y-3">
              <li><a href="mailto:philileshabangu35@gmail.com" className="inline-flex items-center gap-3 break-all hover:text-accent"><Mail size={18} aria-hidden /> philileshabangu35@gmail.com</a></li>
              <li><a href="tel:0661749435" className="inline-flex items-center gap-3 hover:text-accent"><Phone size={18} aria-hidden /> 066 174 9435</a></li>
            </ul>
          </div>
        </div>
        <footer className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Sharon Shabangu</footer>
      </section>
    </main>
  );
}
