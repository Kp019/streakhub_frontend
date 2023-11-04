import React from 'react';
import Image from 'next/image';

function Feat() {
  return (
    <div className='mx-52 my-32 mt-20'>
        <div className='flex flex-col justify-center items-center content-center'>
        <p className='flex justify-center text-3xl font-bold'>Why StreakX is the best Choice ?</p>
        <div className=' w-52 h-1 bg-purple-700 mt-4 rounded-md'></div>
        </div>
        <div className='flex justify-center items-center'>
        <div>
            <Image src="/phone.png" width={600} height={600} alt=''/>
        </div> 
        <div className='flex gap-12'>
            <div className='my-20 mx-12 items-center justify-center content-center text-center'> 
                <div className='py-20'>
                    <Image src="/hand.png" width={150} height={150} alt=''/>
                    <p className='pt-2'>Stay Accountable</p>
                </div>
                <div className='pb-20'>
                    <Image src="/engine.png" width={150} height={150} alt=''/>
                    <p className='pt-2'>Boost Motivation</p>
                </div>
            </div>
            <div className='my-20 mx-12 items-center justify-center content-center text-center'>
                <div className='py-20'>
                    <Image src="/star.png" width={150} height={150} alt=''/>
                    <p className='pt-2'>Easy Integration</p>
                </div>
                <div className='mb-20'>
                    <Image src="/arrow.png" width={150} height={150} alt=''/>
                    <p className='pt-2'>Track Multiple Goals</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feat
