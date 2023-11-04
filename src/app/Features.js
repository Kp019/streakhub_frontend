import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div>
        <div className="flex items-center justify-center gap-20 mx-52 my-40">
            <div>
                <div className="flex items-center pb-2">
                    <Image src='/one.png' width={70} height={70} alt=""/>
                    <h1 className="text-3xl font-bold px-2">EASY</h1>
                </div>
                <p>effortlessly syncs with diverse platforms</p>  
            </div>
            <div>
                <div className="flex items-center pb-2">
                    <Image src='/two.png'width={70} height={70} alt=""/>
                    <h1 className="text-3xl font-bold px-2">UNIQUE</h1>
                </div>
                <p>match your individual goals and preferences</p>
            </div>
            <div>
                <div className="flex items-center pb-2">
                    <Image src='/three.png' width={70} height={70} alt=""/>
                    <h1 className="text-3xl font-bold px-2">SEAMLESS</h1>
                </div>
                <p>share your accomplishments, and boost retention and consistency</p>
            </div>
        </div>
    </div>
  )
}

export default Features
