import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Exhibition from './components/Exhibition'
import Ticket from './components/Ticket'
import WorkingHours from './components/WorkingHour'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Exhibition />
        <Ticket />
        <WorkingHours />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
