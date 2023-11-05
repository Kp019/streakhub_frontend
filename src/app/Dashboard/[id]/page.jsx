"use client";
import React from "react";
import Image from "next/image";
import "./dashboard.scss";
// react icons
import { MdOutlineMenu } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import bg from "../../../../public/Background.png";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard({ params }) {
  const [data, setData] = React.useState(null);
  const [todolist, setTodolist] = React.useState(null);
  useEffect(() => {
    console.log(params.id);
    const fetchData = async () => {
      console.log("fetching data");
      try {
        const response = await axios.get(
          `https://streakhub-backend.onrender.com/connect/${params.id}`
        );

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTodolist = async () => {
      console.log("fetching todolist");
      try {
        const response = await axios.get(
          `https://streakhub-backend.onrender.com/fetchtodo/${params.id}`
        );
        setTodolist(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchTodolist();
  }, []);

  return (
    // <div className='NavbarDash'>dashboard</div>
    <div className="Dashboard">
      <NavbarDash />
      <ContentUpper data={data} todolist={todolist} />
      <ContentLower data={data} />
    </div>
  );
}

const NavbarDash = () => {
  return (
    <nav className="NavbarDash">
      <div>
        <Image
          className="logo-img"
          alt=""
          src="/Logo.png"
          width={50}
          height={50}
        />
      </div>
      <div className="action-buttons">
        <MdOutlineMenu size={30} />
        <IoPersonCircle size={30} />
      </div>
    </nav>
  );
};

// const contentfetcher = async (id) => {
//   const response = await axios.get(
//     "https://streakhub-backend.onrender.com/connect/" + id
//   );
//   console.log(response.data);
//   return response.data;
// };
const ContentUpper = ({ data, todolist }) => {
  const getdate = new Date();
  const month = getdate.toLocaleString("default", { month: "long" });
  const day = getdate.getDate();
  const year = getdate.getFullYear();

  if (!data || !todolist) {
    return (
      <div className="ContentUpper">
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <div className="ContentUpper">
      <div className="dateBox">
        <p className="date">{day}</p>
        <p className="month">{month}</p>
        <p className="year">{year}</p>
      </div>
      <div className="streakBoxes">
        <div className=" fire techStreaks">
          <div className="techStreak">
            <p className="fire streakCount">{data[0].github_streak}</p>
            <p className="streakPlatform">GitHub</p>
          </div>
          <div className="techStreak">
            <p className="fire streakCount">{data[0].wakatime_streak}</p>
            <p className="streakPlatform">VScode</p>
          </div>
          <Image
            className="addNew"
            src="/Plus.png"
            width={30}
            height={30}
            alt=""
          ></Image>
        </div>
        <div className="techStreaks">
          <div className="techStreak personalStreak">
            <p className="streakCount">{todolist[0].streak}</p>
            {/* <p>Hours</p> */}
            <p className="streakPlatform">{todolist[0].name}</p>
          </div>
          <div className="techStreak personalStreak">
            <p className="streakCount">{todolist[1].streak}</p>
            {/* <p>Hours</p> */}
            <p className="streakPlatform">{todolist[1].name}</p>
          </div>
          <Image
            className="addNew"
            src="/Plus.png"
            width={30}
            height={30}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

const ContentLower = ({ data }) => {
  if (!data) {
    return (
      <div className="ContentLower">
        <p>Loading data...</p>
      </div>
    );
  }
  return (
    <div className="ContentLower">
      {}
      {/* <Image className='laptopImg' src='/laptopWithStuffs.png' width={600} height={600}/> */}
      <img
        src={`https://ghchart.rshah.org/0017A3/${data[0].github_username}`}
        className="streakData"
        alt="Name Your Github chart"
      ></img>
    </div>
  );
};
