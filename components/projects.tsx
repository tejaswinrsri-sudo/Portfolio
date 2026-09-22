import { ExternalLink, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/brand-icons'

/**
 * Swap these placeholders with real projects later — keep the same shape
 * and the grid + links will update automatically.
 */
const projects = [
  {
    title: 'Securis',
    description: 'A digital banking security suite that shields senior citizens from fraud with guardian co-signs, screen-share interceptors, and a voice-first AI assistant.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tejaswinrsri-sudo/securis',
    live: 'https://securis-eosin.vercel.app/',
  },
  {
    title: 'Weather Now',
    description: 'A real-time weather app that fetches live conditions for any city using OpenWeatherMap, with a secure backend proxy that keeps the API key hidden.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tejaswinrsri-sudo/Weather-Website',
    live: 'https://lovely-travesseiro-c62fcc.netlify.app/',
  },
  {
    title: 'CraveDrop',
    description: 'Full-stack food ordering and table reservation platform with restaurant discovery, menu browsing, cart, orders, and reservations.',
    stack: ['React', 'Clerk', 'MongoDB', 'Node.js'],
    github: 'https://github.com/ntejaswi376-bit/Food-Booking-System',
    live: 'https://food-booking-system-4low.onrender.com/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionHeading eyebrow="04 / Projects" title="Things I'm building" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1.5">
                    <a
                      href={project.github}
                      aria-label={`${project.title} GitHub repository`}
                      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      <GithubIcon className="size-4" />
                    </a>
                    <a
                      href={project.live}
                      aria-label={`${project.title} live demo`}
                      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-card/40 px-6 py-5 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            More projects coming soon — currently building!
          </div>
        </Reveal>
      </div>
    </section>
  )
}
