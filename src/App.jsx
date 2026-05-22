import 'react'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Layout from './components/Layout'

import Home from './Pages/Home'
import Products from './Pages/Products'
import Terms from './Pages/Terms'
import Findloads from './Pages/Findloads'
import Helpline from './Pages/Helpline'
import Estimate from './Pages/Estimate'


const App = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      <Routes>

        <Route path='/' element={<Layout />} >

          <Route path='/' element={<Home />} />

          <Route path='/products' element={<Products />} />

          <Route path='/terms' element={<Terms />} />

          {/* <Route path='/findloads' element={<Findloads />} /> */}

          <Route path='/helpline' element={<Helpline />} />

          <Route path='/estimate' element={<Estimate/>} />

        </Route>

      </Routes>

      <Footer />


    </>
  )
}

export default App