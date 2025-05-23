import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Course from './components/Course'
import Courses from '../courses/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'
import AddBook from './components/AddBook'
import Footer from './components/Footer'
import Contactus from './components/Contactus'
import About from './components/About'
const App = () => {
    const [authUser, setAuthUser] = useAuth();
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser?<Courses />:<Navigate to='/signup'/>} />
        <Route path='/add' element={<AddBook />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/About' element={<About />} />

      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
