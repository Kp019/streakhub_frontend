import React from 'react'
import Image from 'next/image'

function login() {
  return (
    <div className='mx-52 flex'>
        <div className='flex flex-col justify-center items-center mt-20 gap-20'>
            <Image src="/logoone.png" width={200} height={200} alt=''/>
            <Image src="/laptoph.png" width={400} height={400} alt=''/>
        </div>
        <div>
          <div>
            <div>
              <h1>Welcome Back Homie!</h1>
              <p>Lets see your progress.</p>
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
                <input type='submit' value="Take me in!"/>
              </form>
              <p>New to strakx<span>signup</span></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default login
