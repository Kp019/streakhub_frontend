import React from "react";
import Image from "next/image";
// import mg from "./assets/Group4.png";

function About() {
  return (
    <div className="mx-52 flex flex-col content-center items-center justify-center">
      <h1>About</h1>
      <div className="flex py-20">
        {/* <img src="../assets/Group4.png" className=" w-40 h-40" /> */}
        <p>
          StreakX is more than just an app; it's your secret weapon for boosting
          motivation, fostering accountability, and maintaining long-term
          retention. With StreakX, you can track your streaks on various
          platforms like GitHub, LeetCode, HackerRank, and more. It's the
          perfect way to visualize your dedication and progress, keeping you
          focused and engaged like never before.
        </p>
      </div>
    </div>
  );
}

export default About;
