"use client";
import React from "react";
import { Div } from "../Common/Index";
import { IoIosHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className="nav-bar a fixed bottom-10 w-screen flex justify-center z-50">
      <div className="bg-[#00000031] px-5 py-3 border border-collapse rounded-lg backdrop-blur-md flex gap-6 items-center text-white">
        {/* Home */}
        <Div className="flex items-center gap-2 cursor-pointer">
          <IoIosHome size={10} />
          <span className="text-sm font-semibold ">Home</span>
        </Div>

        {/* About */}
        <Div className="flex items-center gap-2 cursor-pointer">
          <FaUserAlt size={10} />
          <span className="text-sm font-semibold ">About</span>
        </Div>

        {/* Projects */}
        <Div className="flex items-center gap-2 cursor-pointer">
          <MdWork size={10} />
          <span className="text-sm font-semibold ">Projects</span>
        </Div>

        {/* Contact */}
        <Div className="flex items-center gap-2 cursor-pointer">
          <MdContactMail size={10} />
          <span className="text-sm font-semibold ">Contact</span>
        </Div>
      </div>
    </div>
  );
};
