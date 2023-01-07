import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import hero_bg from '../src/images/cover-image.png'
import { motion as m } from 'framer-motion'

function App() {

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${hero_bg})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='pt-20 p-0 h-full'>
        <Hero />
      </div>

      Projects
      ContactForm
    </div>

  )
}

export default App
