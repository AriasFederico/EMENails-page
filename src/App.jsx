import './App.css'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Prices } from '../pages/Prices'
import { Turns } from '../pages/Turns'
import { NotFound } from '../pages/NotFound'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/prices' element={<Prices></Prices>}></Route>
        <Route path='/turns' element={<Turns></Turns>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>        
      </Routes>

      <Footer></Footer>

    </>
  )
}

export default App
