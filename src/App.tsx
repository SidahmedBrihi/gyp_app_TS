import { useEffect, useRef, useState , useContext, createContext} from 'react'
import './App.css'
import { About_us, Blog, Contact, Footer, Header, Landing, Programme, Testimonial, Time, Timer, Trainers } from './Components/index'
import { motion } from 'framer-motion'

export const navbarContext = createContext(null)


function App() {
  let [section, setSection] = useState<HTMLDivElement[]>([])
  useEffect( ()=> {
    if (section.length === 16) {
      setSection(Array.from(new Set(section)))
    }
  },[section])
  return (
    <navbarContext.Provider value={{setSection, section}}>
    <Header />
    <Landing />
    <About_us />
    <Programme />
    <Time />
    <Timer />
    <Trainers/>
    <Testimonial/>
    <Blog/>
    <Contact/>
    <Footer />
    </navbarContext.Provider>
  )
}

export default App
