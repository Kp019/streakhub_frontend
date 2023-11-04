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

    // Create a data object with the form values
    const data = {
      name: name,
      username: username,
      password: password,
    };

    try {
      // Make an HTTP POST request to your backend route
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
    <div className="flex mx-52">
      <div className="flex flex-col items-center justify-center gap-20 mt-20">
        <Image src="/logoone.png" width={200} height={200} alt="" />
        <Image src="/laptoph.png" width={400} height={400} alt="" />
      </div>
      <div>
        <div>
          <div>
            <h1>Get Started Now !</h1>
            <p>Create an Account</p>
          </div>
          <div>
            <form onSubmit={handleSignup}>
              <div className="flex flex-col">
                <label for="fname">Name:</label>
                <input
                  className="text-black"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label for="username">Username</label>
                <input
                  className="text-black"
                  type="text"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label for="fname">Password</label>
                <input
                  className="text-black"
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
                  className="text-black"
                  type="text"
                  value={confirmpassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
              </div>

              <input type="submit" value="Let's Go" />
            </form>
            <p>
              already signed up <a href="./login">log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
