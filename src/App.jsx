import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { ChangeInfo } from './pages/ChangeInfo'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/update' element={<ChangeInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App
