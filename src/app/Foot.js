import React from 'react';
import Image from 'next/image';

function Foot() {
  return (
    <div>
        <div className='flex flex-col text-center justify-center items-center content-center mx-52'>
            <h1 className='text-4xl font-bold'>Ready to turn your <span className='text-purple-500'>dreams into streaks</span> <br/> and your <span className='text-purple-500'>streaks into success?</span></h1>
            <p className='text-xl p-10'>Don't let your hard work and dedication go unnoticed. Show the world your commitment and maintain a strong sense of accountability with StreakX. Start your streak journey today and elevate your success to new heights!</p>
            <button className=' bg-purple-600 px-4 py-2 rounded-md hover:shadow-purple-500/30 hover:shadow-lg hover:duration-200'>Download Now</button>
        </div>
        <div>
            <div className='flex justify-center content-center items-center mx-52 py-20 gap-20'>
                <Image src="/logoone.png" width={100} height={100} alt=''/>
                <div className='flex flex-row gap-20'>
                    <p>Features</p>
                    <p>About</p>
                    <p>Community</p>
                </div>
                <p>@Forbidden_403</p>
            </div>
        </div>
    </div>
  )
}

export default Foot
