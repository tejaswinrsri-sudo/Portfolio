import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const timeline = [
  {
    title: 'B.Tech, Computer Science & Engineering',
    place: 'SRM Institute of Science and Technology',
    period: '2026 – 2030',
    detail: 'First Year',
    highlight: true,
  },
  {
    title: 'Class XII',
    place: 'Higher Secondary Education',
    period: 'Completed',
    detail: '86%',
    highlight: false,
  },
  {
    title: 'Class X',
    place: 'Secondary Education',
    period: 'Completed',
    detail: '95%',
    highlight: false,
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <SectionHeading eyebrow="03 / Education" title="My academic journey" />
      </Reveal>

      <div className="relative ml-3 space-y-8 border-l border-border pl-8 sm:ml-4">
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="relative">
              <span
                className={`absolute -left-[42px] flex size-8 items-center justify-center rounded-full border sm:-left-[46px] ${
                  item.highlight
                    ? 'border-primary/40 bg-primary/15 text-primary'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                <GraduationCap className="size-4" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {item.detail}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
