import React from 'react'
import Image from 'next/image'
import { MdOutlineMenu } from 'react-icons/md'
import { IoPersonCircle } from 'react-icons/io5'
import './addDetails.scss'

const AddDetails = () => {
  return (
    <div className='AddDetails'>
        <NavbarDash/>
        <Content/>
    </div>
  )
}

export default AddDetails

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


const Content = () => {
    return (
      <div className="Content">
        <div className="dateBox">
          <p className="date">04</p>
          <p className="month">November</p>
          <p className="year">2023</p>
        </div>
        <div className="inputFormDiv">
            <form className="inputForm">
                <input type="text" placeholder="GitHub Username" name='githubUsername' className="inputField"></input>
                <input type="text" placeholder="Wakatime API" name='wakatimeAPI' className="inputField"></input>
                <input type="text" placeholder="Wakatime Username" name='wakatimeUsername' className="inputField"></input>
                <input type="text" placeholder="Wakatime Goal (In hours)" name='wakatimeGoal' className="inputField"></input>

                <button className="submitButton">Set!</button>
            </form>
        </div>
        {/* <div className="streakBoxes">
          <div className=" fire techStreaks">
            <div className="techStreak">
              <p className="fire streakCount">35</p>
              <p className="streakPlatform">GitHub</p>
            </div>
            <div className="techStreak">
              <p className="fire streakCount">35</p>
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
        </div> */}
      </div>
    );
  }