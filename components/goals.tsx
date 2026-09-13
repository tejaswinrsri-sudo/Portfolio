import { Rocket, Users, Lightbulb } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: Rocket,
    title: 'Hands-on Learning',
    text: 'Turning concepts into real, working projects instead of just theory.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    text: 'Growing through hackathons, teams, and building alongside others.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    text: 'Chasing emerging tech and staying excited about what comes next.',
  },
]

export function Goals() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-chart-2/10 p-8 sm:p-12">
          <p className="mb-2 font-mono text-sm font-medium text-primary">05 / Why I Build</p>
          <h2 className="max-w-2xl text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
            I&apos;m working to grow into a confident contributor — one project, one
            hackathon, and one collaboration at a time.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <pillar.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
