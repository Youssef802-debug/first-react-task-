import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import  Navbar  from './Navbar';
import Footer from './Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'


const routers =  createBrowserRouter([
{path : '/' , element :  <Layout/> , children : [

 {path: '/about' , element : <About/>},
  {path: '/portfolio' , element : <Portfolio/>},
  {path: '/contacts' , element : <Contact/>},


]}
  
])





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

<RouterProvider router={routers}></RouterProvider>
  


    </>
  )
}

export default App
