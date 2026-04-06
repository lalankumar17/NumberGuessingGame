import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow flex flex-col pt-14">
        <Hero/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
