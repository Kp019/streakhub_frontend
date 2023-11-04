import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div>
        <div className="flex justify-center gap-20 mx-52 my-40">
            <div>
                <div className="flex items-center">
                    <Image src='/one.png' width={70} height={70} alt=""/>
                    <h1>EASY</h1>
                </div>
                <p>effortlessly syncs with diverse platforms</p>  
            </div>
            <div>
                <div className="flex items-center">
                    <Image src='/two.png'width={70} height={70} alt=""/>
                    <h1>UNIQUE</h1>
                </div>
                <p>match your individual goals and preferences</p>
            </div>
            <div>
                <div className="flex items-center">
                    <Image src='/three.png' width={70} height={70} alt=""/>
                    <h1>SEAMLESS</h1>
                </div>
                <p>share your accomplishments, and boost retention and consistency</p>
            </div>
        </div>
    </div>
  )
}

export default Features
