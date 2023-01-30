import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Profile from './Profile'
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/admin' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App