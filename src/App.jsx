import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import TaskForm from './component/TaskForm'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add-task' element={<TaskForm />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App