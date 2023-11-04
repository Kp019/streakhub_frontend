import React from 'react'
import Image from 'next/image'
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'

function Navbar() {
  return (
    <div className='flex gap-24 justify-center'>
      <ul className='flex gap-5'>
        <li>ABOUT</li>
        <li>COMMUNITY</li>
      </ul>
      <img src={Image} alt=''/>
      <ul className='flex gap-5'>
        <li>DASHBOAD</li>
        <li>CONTACT</li>
      </ul>
    </div>
  )
}

export default Navbar
