import { Code2, Compass } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const technical = [
  { name: 'C', learning: false },
  { name: 'Core Python', learning: false },
  { name: 'HTML', learning: false },
  { name: 'CSS', learning: false },
  { name: 'JavaScript', learning: true },
  { name: 'CP Fundamentals', learning: true },
]

const interests = [
  'Web Development',
  'Web3 & Blockchain',
  'Software Development',
  'Hackathons & Tech Events',
  'Emerging Technologies',
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionHeading eyebrow="02 / Skills" title="What I work with" />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Technical
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {technical.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    {skill.learning && (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        Learning
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                  <Compass className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Areas of Interest
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
