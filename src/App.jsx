import { useState } from 'react'
import {BrowserRouter,Route,Routes,Router} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
