"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios"; // Import axios

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://streakhub-backend.onrender.com/register",
        data
      );

      // Handle the response (you can log it or show a message to the user)
      console.log(response.data);
      let windowplace = "./Adddetails/" + response.data[0].uid;
      console.log(windowplace);
      window.location.href = windowplace;
    } catch (error) {
      // Handle any errors (e.g., network error, server error)
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#040013] to-[#11033d]">
    <div className="flex px-52  py-16 justify-center items-center content-center">
      <div className="flex flex-col items-center justify-center gap-20 mt-20">
        <Image src="/logoone.png" width={200} height={200} alt="" />
        <Image src="/laptoph.png" width={400} height={400} alt="" />
      </div>
      <div className="px-20">
          <div >
            <h1 className="text-3xl font-bold">Get Started <span className="text-purple-500">Now!</span></h1>
            <p className="text-xl">Create an Account</p>
          </div>
          <div className="pt-10">
            <form onSubmit={handleSignup}>
              <div className="flex flex-col pb-8">
                <label for="fname">Name:</label>
                <input
                  className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col pb-8">
                <label for="username">Username</label>
                <input
                  className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2"
                  type="text"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col pb-8">
                <label for="fname">Password</label>
                <input
                  className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2"
                  type="text"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label for="fname">Confirm Password</label>
                <input
                  className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2"
                  type="text"
                  value={confirmpassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
              </div>

              <input className="bg-purple-600 px-4 py-2 rounded-md hover:shadow-purple-500/30 hover:shadow-lg hover:duration-200 my-5" type="submit" value="Let's Go" />
            </form>
            <p>
              already signed up <a className="text-purple-700" href="./login">log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
