import { useState } from 'react'
import './App.css'
import Herosection from './components/Herosection'
import AboutSection from './components/AboutSection'
import Event from './components/Event'
import Registration from './components/Registration'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Herosection/>
    <AboutSection/>
    <Event/>
    <Registration/>
    </>
       
  )
}

export default App
