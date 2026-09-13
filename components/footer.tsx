import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/tejaswinrsri-sudo' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagineni-tejaswi-1b3750429/' },
  { icon: Mail, label: 'Email', href: 'mailto:tejaswinrsri@gmail.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="font-heading text-sm font-semibold text-foreground">
          Tejaswi<span className="text-primary">.</span>
        </p>

        <div className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          
        </p>
      </div>
    </footer>
  )
}
