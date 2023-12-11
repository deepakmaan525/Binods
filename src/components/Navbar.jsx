import React from 'react'
import Logo from '../assets/images/page-logo.svg'
const Navbar = () => {
  return (
    <>
      <div className='flex'>
        <img src={Logo} alt="page-logo" />
        <h1 className='text-2xl '>page-logo</h1>
        <p className='text-current '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sit? Tempora odit officiis suscipit voluptates, eaque modi itaque exercitationem alias.</p>
      </div>
    </>
  )
}

export default Navbar
