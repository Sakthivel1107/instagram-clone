import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Story from './Story.jsx'
import Profile from './Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/Story/:id/:tot',
      element:<Story/>
    },
    {
      path:'/Profile',
      element:<Profile/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)