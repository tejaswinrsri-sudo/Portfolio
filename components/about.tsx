import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const softSkills = [
  'Quick Learner',
  'Team Collaboration',
  'Curiosity & Initiative',
  'Time Management',
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <SectionHeading eyebrow="01 / About" title="A little about me" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I have a solid foundation in <span className="text-foreground">C</span> and{' '}
              <span className="text-foreground">Core Python</span>, and I&apos;m currently
              deepening my skills in{' '}
              <span className="text-foreground">HTML, CSS, and JavaScript</span> alongside{' '}
              <span className="text-foreground">Web3 fundamentals</span>.
            </p>
            <p>
              I&apos;m genuinely curious about emerging technology and how software can solve
              real problems. My goal is to keep building projects, join hackathons, and grow
              into a confident developer through hands-on learning.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Soft Skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
