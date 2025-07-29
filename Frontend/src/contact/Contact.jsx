import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'
import Contact from '../components/Contact'

function contact() {
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
      <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default contact