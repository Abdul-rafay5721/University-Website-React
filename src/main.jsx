import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Index from './Components/Pages/Index'
import About from './Components/Pages/About'
import Programs from './Components/Pages/Programs'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import BlogDetails from './Components/Pages/BlogDetails'
import Element from './Components/Pages/Element'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Index/>} />
      <Route path='about' element={<About/>} />
      <Route path='programs' element={<Programs/>} />
      <Route path='Blog' element={<Blog/>} />
      <Route path='Blog-details' element={<BlogDetails/>} />
      <Route path='elements' element={<Element/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
    
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
