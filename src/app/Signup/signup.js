import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function signup() {
  return (
    <div className='mx-52 flex'>
        <div className='flex flex-col justify-center items-center mt-20 gap-20'>
            <Image src="/logoone.png" width={200} height={200} alt=''/>
            <Image src="/laptoph.png" width={400} height={400} alt=''/>
        </div>
        <div>
          <div>
            <div>
              <h1>Get Started Now !</h1>
              <p>Create an Account</p>
            </div>
            <div>
              <form>
                <div className='flex flex-col'>
                  <label for="fname">First Name:</label>
                  <input className='text-black' type="text"/>
                </div>
                <div className='flex flex-col'>
                  <label for="fname">Password</label>
                  <input className='text-black' type="text"/>
                </div>
                <div className='flex flex-col'>
                  <label for="fname">Confirm Password</label>
                  <input className='text-black' type="text"/>
                </div>
                <input type='submit' value="Let's Go"/>
              </form>
              <p>already signedup<span>log in</span></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default signup
