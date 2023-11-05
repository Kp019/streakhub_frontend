import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <div className='flex flex-col items-center my-40'>
        <Image src='/logoone.png' width={300} height={300} alt=''/>
        <p className=' text-xl'>transforms your everyday endeavors into a visual journey of <span className=' text-color [#000]'>streaks</span> and <span>records</span>.</p>
        <div className='flex gap-5 py-10'>
            <Link href='/Signup'><button className=' bg-purple-600 px-4 py-2 rounded-md hover:shadow-purple-500/30 hover:shadow-lg hover:duration-200'>Signup</button></Link>
            <Link href='/Community'><button className=' bg-purple-600 px-4 py-2 rounded-md hover:shadow-purple-500/30 hover:shadow-lg hover:duration-200'>Join our Community</button></Link>
        </div>
        <Image className='pt-20' src="/Group4.png" width={1000} height={1000} alt="" />
    </div>
  )
}

export default Hero
