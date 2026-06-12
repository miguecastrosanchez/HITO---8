import { useState } from 'react'


import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import PizzaDetail from './pages/pizzadetail'

import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'

import Pizza from './components/Pizza'
import E404 from './pages/E404'
import Profiles from './pages/Profiles'
import profile from './components/profile'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { UserContext } from './context/UserContext' 


function App() {
  const [count, setCount] = useState(0)

const {user, setUser} = useContext(GlobalContext);
const {login, setLogin} = useContext(UserContext);

  return (
    <>
 
   
    
     <Routes>
   
      <Route path='/' element={login ? <Home/> : <Login/>}/>
      <Route path='/pizza/:id' element={<PizzaDetail/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profile' element={login ? <Profiles/> : <Login/>}/>
      <Route path='*' element={<E404/>}/> 
   
    </Routes>
   
  
   
    </> 
  )
}

export default App