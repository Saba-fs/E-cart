
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'

import Cart from './Pages/Cart'
import Home from './Pages/Home'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'

function App() {
  

  return (
    <>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        {/* requsting an in =valid route then ot redirect to home page(base url) */}
        <Route path='/*' element={<Navigate to={'/'}/>} />
       </Routes>
     
      <Footer/>
    </>
  )
}

export default App
