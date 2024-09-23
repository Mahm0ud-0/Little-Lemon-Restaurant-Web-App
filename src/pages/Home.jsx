import About from "../components/About"
import Hero from "../components/Hero"
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"


function Home() {
  return (
    <main className="flex flex-col justify-between gap-[80px]">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}

export default Home