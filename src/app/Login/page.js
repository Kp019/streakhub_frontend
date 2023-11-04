import React from "react";
import Image from "next/image";

function login() {
  return (
    <div className="bg-gradient-to-b from-[#040013] to-[#11033d]">
    <div className="flex px-52  py-24 justify-center items-center content-center ">
      <div className="flex flex-col items-center justify-center gap-20">
        <Image src="/logoone.png" width={200} height={200} alt="" />
        <Image src="/laptoph.png" width={400} height={400} alt="" />
      </div>
        <div className="px-20">
          <div>
            <h1 className="text-3xl font-bold">Welcome Back <span className="text-purple-500">Homie!</span></h1>
            <p className="text-xl">Lets see your progress.</p>
          </div>
          <div className="pt-10">
            <form>
              <div className="flex flex-col pb-8">
                <label for="fname">First Name:</label>
                <input className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2" type="text" />
              </div>
              <div className="flex flex-col pb-8">
                <label for="fname">Password</label>
                <input className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2" type="text" />
              </div>
              <input className="bg-purple-600 px-4 py-2 rounded-md hover:shadow-purple-500/30 hover:shadow-lg hover:duration-200 my-5" type="submit" value="Take me in!" />
            </form>
            <p>
              New to streakx <a className="text-purple-700" href="./Signup">Signup</a>
            </p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default login;
