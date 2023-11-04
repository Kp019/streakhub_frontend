import React from "react";
import Image from "next/image";

function login() {
  return (
    <div className="flex mx-52">
      <div className="flex flex-col items-center justify-center gap-20 mt-20">
        <Image src="/logoone.png" width={200} height={200} alt="" />
        <Image src="/laptoph.png" width={400} height={400} alt="" />
      </div>
      <div>
        <div>
          <div>
            <h1>Welcome Back Homie!</h1>
            <p>Lets see your progress.</p>
          </div>
          <div>
            <form>
              <div className="flex flex-col">
                <label for="fname">First Name:</label>
                <input className="text-black" type="text" />
              </div>
              <div className="flex flex-col">
                <label for="fname">Password</label>
                <input className="text-black" type="text" />
              </div>
              <input type="submit" value="Take me in!" />
            </form>
            <p>
              New to streakx <a href="./Signup">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
