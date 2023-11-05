"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import axios from "axios";
import "./addDetails.scss";

export default function AddDetails({ params }) {
  console.log(params);
  return (
    <div className="AddDetails">
      <NavbarDash />
      <Content pid={params} />
    </div>
  );
}

const NavbarDash = () => {
  return (
    <nav className="NavbarDash">
      <div>
        <Image className="logo-img" src="/Logo.png" width={50} height={50} />
      </div>
      <div className="action-buttons">
        <MdOutlineMenu size={30} />
        <IoPersonCircle size={30} />
      </div>
    </nav>
  );
};

const Content = (pid) => {
  console.log("pid", pid.pid.id);
  const [githubUsername, setGithubUsername] = useState("");
  const [wakatimeAPI, setWakatimeAPI] = useState("");
  const [wakatimeUsername, setWakatimeUsername] = useState("");
  const [wakatimeGoal, setWakatimeGoal] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const data = {
      id: Number(pid.pid.id),
      githubusername: githubUsername,
      wakatime_api: wakatimeAPI,
      setwakatimeusername: wakatimeUsername,
      setwakatimegoal: wakatimeGoal,
    };

    try {
      await axios.post(
        "https://streakhub-backend.onrender.com/addcontent",
        data
      );
      let windowurl = "/Dashboard/" + pid.pid.id;
      window.location.href = windowurl;
    } catch (error) {
      console.error(error);
      alert("Error submitting data. Please try again."); // Notify the user of the error
    }
  };

  return (
    <div className="Content">
      <div className="dateBox">
        <p className="date">04</p>
        <p className="month">November</p>
        <p className="year">2023</p>
      </div>
      <div className="inputFormDiv">
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="GitHub Username"
            name="githubUsername"
            className="inputField"
            value={githubUsername}
            onChange={(event) => {
              setGithubUsername(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Wakatime API"
            name="wakatimeAPI"
            className="inputField"
            value={wakatimeAPI}
            onChange={(event) => {
              setWakatimeAPI(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Wakatime Username"
            name="wakatimeUsername"
            className="inputField"
            value={wakatimeUsername}
            onChange={(event) => {
              setWakatimeUsername(event.target.value);
            }}
          ></input>
          <input
            type="Number"
            placeholder="Wakatime Goal (In hours)"
            name="wakatimeGoal"
            className="inputField"
            value={wakatimeGoal}
            onChange={(event) => {
              setWakatimeGoal(event.target.value);
            }}
          ></input>

          <button className="submitButton">Set!</button>
        </form>
      </div>
    </div>
  );
};
