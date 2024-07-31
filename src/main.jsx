import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import Hero from './components/custom/Hero.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/toaster.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripid]/index.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Hero/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripid',
    element: <ViewTrip/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <Toaster/>
    <RouterProvider router={router}/></GoogleOAuthProvider>
  </React.StrictMode>,
)
