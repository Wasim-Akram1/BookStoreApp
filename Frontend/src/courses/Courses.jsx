import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'
import Course from '../components/Course'

function Courses() {
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
      <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses