import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='flex flex-col items-center my-52'>
        <h1>STREAKX</h1>
        <p>transforms your everyday endeavors into a visual journey of <span className=' text-color [#000]'>streaks</span> and <span>records</span>.</p>
        <div className='flex gap-5 py-5'>
            <button href="google.com">Login</button>
            <button>Dashboard</button>
        </div>
        <Image src="/Group4.png" width={500} height={500} alt="" />
    </div>
  )
}

export default Hero
