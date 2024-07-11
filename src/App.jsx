import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='app'>

       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/coins/:coinId' element={<Coin></Coin>}></Route>
       </Routes>
       <Footer></Footer>
       
    </div>
  )
}

export default App