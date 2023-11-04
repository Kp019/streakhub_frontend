import About from './About'
import Feat from './Feat'
import Features from './Features'
import Hero from './Hero'
import Navbar from './Navbar'
import Foot from './Foot'

export default function Home() {
  return (
      <div className='bg-gradient-to-b from-[#000] to-[#180248]'>
        <Navbar/>
        <Hero/>
        <About/>
        <Features/>
        <Feat/>
        <Foot/>
      </div>
  )
}
