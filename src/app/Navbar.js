"use client"

// import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
<<<<<<< HEAD:src/app/Navbar.js
=======
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
>>>>>>> 550ee00dc10cc30a9c94a1b4094bf8d954e7428b:src/app/components/Navbar.js

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
