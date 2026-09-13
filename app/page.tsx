import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Goals } from '@/components/goals'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
