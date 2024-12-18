import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
import Header from './components/Header'
import Greeting from './components/Greeting'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const root = document.getElementById("root")

  const router = createBrowserRouter([
    {
      path : "/",
      element : (
        <>
          <Header />
          <Greeting />
        </>
        
      )
    }
  ])

  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
