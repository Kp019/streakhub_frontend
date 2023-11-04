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
      <ContentLower/>
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
          <Image className='addNew' src='/Plus.png' width={30} height={30}></Image>

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
            <Image className='addNew' src='/Plus.png' width={30} height={30}></Image>
          
        </div>
      </div>
    </div>
  );
}

const ContentLower = () => {
  return (
    <div className="ContentLower">
      {/* <Image className='laptopImg' src='/laptopWithStuffs.png' width={600} height={600}/> */}
      <img src="https://ghchart.rshah.org/FFE96D/technodumb" className='streakData' alt="Name Your Github chart"></img>
    </div>
  );
}