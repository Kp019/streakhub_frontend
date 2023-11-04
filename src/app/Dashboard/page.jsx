// import React from 'react'
import Image from 'next/image'
import './dashboard.scss'
// react icons
import { MdOutlineMenu } from 'react-icons/md'
import { IoPersonCircle } from 'react-icons/io5'


const dashboard = () => {
  return (
    // <div className='NavbarDash'>dashboard</div>
    <div className="Dashboard">
      <NavbarDash/>
      <ContentUpper/>
    </div>
  )
}

export default dashboard

const NavbarDash = () => {
    return (
        <nav className='NavbarDash'>
          <div>
            <Image className='logo-img' src='/Logo.png' width={50} height={50}/>
          </div>
          <div  className='action-buttons'>
            <MdOutlineMenu size={30}/>
            <IoPersonCircle size={30}/>
          </div>
        </nav>
    );
}

const ContentUpper = () => {
  return (
    <div className="ContentUpper">
      <div className="dateBox">
        <p className="date">04</p>
        <p className="month">November</p>
        <p className="year">2023</p>
      </div>
      <div className="streakBoxes">
        <div className="techStreaks">
          <div className="techStreak">
            <p className="streakCount">35</p>
            <p className="streakPlatform">GitHub</p>
          </div>
          <div className="techStreak">
            <p className="streakCount">35</p>
            <p className="streakPlatform">GitHub</p>
          </div>
          <div className="addNew">+</div>
        </div>
        <div className="techStreaks">
          <div className="techStreak personalStreak">
            <p className="streakCount">06</p>
            <p>Hours</p>
            <p className="streakPlatform">Learn</p>
          </div>
          <div className="techStreak personalStreak">
            <p className="streakCount">06</p>
            <p>Hours</p>
            <p className="streakPlatform">Learn</p>
          </div>
            <Image src='/Plus.png' width={100} height={100}></Image>
          
        </div>
      </div>
    </div>
  );
}