import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'


function App() {

  return (
    <div>
      <NavBar />
      <div className='mt-20 p-0 bg-cover bg-cover-image h-full'>
        <Hero />
      </div>

      Projects
      ContactForm
    </div>

  )
}

export default App
