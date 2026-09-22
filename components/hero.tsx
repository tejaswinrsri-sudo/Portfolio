'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'

const phrases = [
  'building in Web Dev & Web3',
  'learning something new every day',
  'shipping real projects',
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const speed = deleting ? 40 : 75

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-24 size-[28rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-chart-2/20 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            Chennai, Tamil Nadu, India
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Nagineni
            <br />
            Tejaswi
          </h1>

          <p className="mt-5 h-7 font-mono text-lg text-primary sm:text-xl">
            <span className="text-muted-foreground">{'> '}</span>
            {text}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-pulse bg-primary align-middle" />
          </p>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            First-year B.Tech CSE student at SRM Institute of Science and Technology,
            passionate about Web Development, Web3, and building real projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <TerminalCard />
        </div>
      </div>
    </section>
  )
}

function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/70 shadow-2xl shadow-primary/5 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-yellow-400/80" />
        <span className="size-3 rounded-full bg-green-400/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          tejaswi@dev ~ portfolio
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
        <code>
          <span className="text-primary">const</span> tejaswi = {'{'}
          {'\n'}
          {'  '}role: <span className="text-chart-2">'CSE Student'</span>,{'\n'}
          {'  '}year: <span className="text-chart-2">'First Year'</span>,{'\n'}
          {'  '}stack: [<span className="text-chart-2">'Python'</span>,{' '}
          <span className="text-chart-2">'HTML'</span>,{' '}
          <span className="text-chart-2">'CSS'</span>],{'\n'}
          {'  '}learning: [<span className="text-chart-2">'JS'</span>],{'\n'}
          {'  '}building: <span className="text-primary">true</span>,{'\n'}
          {'};'}
          {'\n\n'}
          <span className="text-muted-foreground/60">{'// always shipping →'}</span>
        </code>
      </pre>
    </div>
  )
}
