// import React from 'react'
import Image from 'next/image'

const dashboard = () => {
  return (
    // <div>dashboard</div>
    <>
    <NavbarDash class='NavbarDash'>

    </NavbarDash>
    </>
  )
}

export default dashboard

const NavbarDash = () => {
    return (
        <nav>
          <div class='logo-img'>
            <Image src='/Logo.png' width={50} height={50}/>
          </div>
          <div></div>
        </nav>
    );
}