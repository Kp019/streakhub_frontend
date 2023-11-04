"use client"

// import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  // i have dashboard.js in the same folder as this file. what is the href to use in link?
  // <Link href='/dashboard'>

  return (
    <div className='flex gap-24 justify-center'>
      <ul className='flex gap-5'>
        <li>ABOUT</li>
        <li>COMMUNITY</li>
      </ul>
      <img src={Image} alt=''/>
      <ul className='flex gap-5'>
        <Link href='/Dashboard'>
          <li>DASHBOAD</li>
        </Link>
        <li>CONTACT</li>
      </ul>
    </div>
  )
}

export default Navbar
