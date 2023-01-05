import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import hero_bg from '../src/images/cover-image.png'

function App() {

  return (
    <div>
      <NavBar />
      <div style={{backgroundImage: `url(${hero_bg})` }} className='mt-20 p-0 bg-cover bg-cover-image h-full'>
        <Hero />
      </div>

      Projects
      ContactForm
    </div>

  )
}

export default App
