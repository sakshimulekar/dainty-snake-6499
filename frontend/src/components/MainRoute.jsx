import React from 'react'
import {Route,Routes} from "react-router-dom"
import Homepage from '../pages/Homepage'
import Sign from './Sign'
import Login from './Login'
import Logout from './Logout'
import Productpage from '../pages/Productpage'
import Admin from '../pages/Admin'
import Cartpage from '../pages/Cartpage'
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Sign/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/products' element={<Productpage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
      </Routes>
    </div>
  )
}

export default MainRoute