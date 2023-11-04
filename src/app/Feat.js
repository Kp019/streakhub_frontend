import React from 'react';
import Image from 'next/image';

function Feat() {
  return (
    <div className='m-52'>
        <p>Why StreakX is the best Choice ?</p>
        <div className='flex justify-center items-center gap-52'>
        <div>
            <Image src="/phone.png" width={600} height={600} alt=''/>
        </div> 
        <div className='flex gap-20'>
            <div className='p-20'> 
                <div className='py-20'>
                    <Image src="/hand.png" width={100} height={100} alt=''/>
                    <p>Stay Accountable</p>
                </div>
                <div className='pb-20'>
                    <Image src="/engine.png" width={100} height={100} alt=''/>
                    <p>Boost Motivation</p>
                </div>
            </div>
            <div className='p-20'>
                <div className='py-20'>
                    <Image src="/star.png" width={100} height={100} alt=''/>
                    <p>Easy Integration</p>
                </div>
                <div className='pb-20'>
                    <Image src="/arrow.png" width={100} height={100} alt=''/>
                    <p>Track Multiple Goals</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feat
