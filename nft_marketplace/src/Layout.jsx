import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from "./components/Header"

function layout() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout