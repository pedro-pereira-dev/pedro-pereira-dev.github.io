import {
  About,
  Education,
  Experience,
  Header,
  Footer,
  Projects,
} from '@/components'

export default function Home() {
  return (
    <div className="font-mono text-md text-slate-500">
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  )
}
