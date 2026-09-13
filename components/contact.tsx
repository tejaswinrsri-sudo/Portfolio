import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const EMAIL = 'tejaswinrsri@gmail.com'
const PHONE = '+91 96776635559'
const PHONE_TEL = '+9196776635559'

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com/tejaswinrsri-sudo',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: 'https://www.linkedin.com/in/nagineni-tejaswi-1b3750429/',
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="06 / Contact"
            title="Let's build something"
            className="mb-4 text-center"
          />
          <p className="mx-auto max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have an idea, a project, or just want to say hi? Reach out directly via email,
            phone, or connect with me on social platforms.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl space-y-4">
        {/* Email Card */}
        <Reveal delay={100}>
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Send email to ${EMAIL}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 sm:p-6"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="size-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="block truncate font-heading text-base font-semibold text-foreground group-hover:text-primary sm:text-lg">
                  {EMAIL}
                </span>
              </div>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </a>
        </Reveal>

        {/* Phone Card */}
        <Reveal delay={150}>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call ${PHONE}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 sm:p-6"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="size-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </span>
                <span className="block truncate font-heading text-base font-semibold text-foreground group-hover:text-primary sm:text-lg">
                  {PHONE}
                </span>
              </div>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </a>
        </Reveal>

        {/* Social Links Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {socials.map((social, index) => (
            <Reveal key={social.label} delay={200 + index * 50}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.label}`}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 sm:p-6"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <social.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {social.label}
                    </span>
                    <span className="block truncate font-heading text-base font-semibold text-foreground group-hover:text-primary">
                      {social.label} Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Location Note */}
        <Reveal delay={300}>
          <div className="flex items-center justify-center gap-2 pt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
