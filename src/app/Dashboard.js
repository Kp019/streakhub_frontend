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
            <Image src='/Logo.png'/>
          </div>
          <div></div>
        </nav>
    );
}