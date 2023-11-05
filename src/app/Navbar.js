import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  // i have dashboard.js in the same folder as this file. what is the href to use in link?
  // <Link href='/dashboard'>

  return (
    <div className='flex p-14 gap-14 items-center justify-center'>
      <ul className='flex gap-10 '>
        <li>ABOUT</li>
        <Link href='/Community'>
        <li>COMMUNITY</li>
        </Link>      
        </ul>
      <Image src="/logo.png" width={50} height={50} alt=''/>
      <ul className='flex gap-10'>
        <Link href='/Dashboard'>
          <li>Features</li>
        </Link>
        <li>Download</li>
      </ul>
    </div>
  )
}

export default Navbar
