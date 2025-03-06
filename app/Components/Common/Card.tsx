"use client";
import React from "react";
import { Div } from "./Index";
import Image from "next/image";
import Link from "next/link";
import { PiGithubLogoThin } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

type CardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  links: { demo?: string; repo?: string };
  onOpen: () => void;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  technologies,
  links,
  onOpen,
}) => {
  return (
    <Div className="w-full cursor-pointer col-span-1">
      <Div
        onClick={onOpen}
        className="relative w-full cursor-pointer col-span-1 p-1 h-full rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/3 w-[260px] h-[220px] rounded-full bg-[#3BBE9F] opacity-90 blur-md animate-blob z-20"></div>

        <div className="absolute top-1/2 left-1/2 w-[260px] h-[290px] rounded-full bg-[#BD8306] opacity-90 blur-md animate-blob z-10"></div>

        <Div className="relative bg-[#000]  h-full  rounded-2xl z-50 p-2 ">
          
          <Div className="relative z-40 w-full h-48 overflow-hidden rounded-lg ">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover  hover:scale-105 transition-transform duration-300"
            />
          </Div>
          <div className="flex justify-between px-3 py-2">
          <h3 className="text-xl p-2  font-bold font-acme  text-gray-200">{title}</h3>
          <Div className="flex  ">
              {links.repo && (
                <Link
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub Repository"
                  className="text-white  px-2 py-1 text-sm font-medium  transition-colors flex items-center"
                >
                  <PiGithubLogoThin className="hover:text-primary" />
                </Link>
              )}
              {links.demo && (
                <Link
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Live Demo"
                  className="text-white  px-2 py-1   text-sm font-medium  transition-colors flex items-center"
                >
                  <IoEyeOutline className="hover:text-primary" />
                </Link>
              )}
            </Div>
          </div>

          {/* Project Title */}
          
          <Div className="flex flex-wrap w-full justify-center my-2 gap-2 z-50    ">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className=" text-sm  border border-gray-500  text-gray-200 py-1 px-2  first:pl-0 last:pr-0"
              >
                {tech}
              </span>
            ))}
          </Div>

          {/* Project Actions */}
          <Div className="flex justify-between p-2 px-4 items-center mt-4">
            <p className="text-sm font-courier  text-gray-400 flex-1">{description}</p>
            
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
