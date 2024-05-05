import { Header, About, Experience, Education, Footer } from '@/components'

export default function Home() {
  return (
    <div className="font-mono text-md text-slate-500">
      <Header />
      <About />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}
