import React from "react";
import Image from "next/image";
import "../Dashboard/[id]/dashboard.scss";
import { MdOutlineMenu } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

function page() {
  const data = [
    {
      Topic: "How can I contribute to FOSS United?",
      Author: "kp019",
      Description: "Events - FOSS conducts annual and monthly events. Individuals can volunteer at the events in the following categories. Volunteering in yearly events (FOSS Hack, IndiaFOSS Conference). Website design and developmen… read more",
    },
    {
      Topic: "How can I contribute to FOSS United?",
      Author: "jjsuk",
      Description: "Events - FOSS conducts annual and monthly events. Individuals can volunteer at the events in the following categories. Volunteering in yearly events (FOSS Hack, IndiaFOSS Conference). Website design and developmen… read more",
    },
    {
      Topic: "How can I contribute to FOSS United?",
      Author: "alnas",
      Description: "Events - FOSS conducts annual and monthly events. Individuals can volunteer at the events in the following categories. Volunteering in yearly events (FOSS Hack, IndiaFOSS Conference). Website design and developmen… read more",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#040013] to-[#11033d]">
    <div className="p-16 px-52">
      <NavbarDash />
      <div className="py-32">
      <h1 className="flex justify-center text-5xl">Community</h1>
        <div className="flex py-20 gap-20">
        <ul className="flex flex-col text-start">
          {data.map((element) => (
              <li className="m-5 rounded-md overflow-hidden border-2 border-violet-900 p-8 px-24">
              <div className="flex flex-col justify-start items-start content-start text-left">
                <h4 className="text-xl text-white">{element.Topic}</h4>
                <p className="text-lg text-purple-500 py-3">{element.Author}</p>
                <p className="text-lg text-gray-400">{element.Description}</p>
              </div>
            </li>
          ))}
        </ul>
          <div className="">
          <form>
              <div className="flex flex-col pb-8">
                <label for="fname">Title</label>
                <input className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2 px-20" type="text" />
              </div>
              <div className="flex flex-col pb-8">
                <label for="fname">Summary</label>
                {/* <input className="text-white appearance-none bg-transparent border-b-2 focus:outline-none mt-2 " type="text" /> */}
              <textarea className="text-white px-20 appearance-none bg-transparent border-b-2 focus:outline-none mt-2 resize-y"></textarea>
              </div>
              <input className="bg-purple-600 px-4 py-2 rounded-md hover:shadow-purple-500/30 hover:shadow-lg hover:duration-200 my-5" type="submit" value="Post" />
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default page;

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
