"use client";
import React from "react";
import { Div } from "./Index";
import Image from "next/image";
import { AnimatedIcons } from "./AnimatedIcons"; // Import your animation component
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

type CardProps = {
  image: string; // Path to the project image
  title: string; // Project title
  description: string; // Short project description
  technologies: string[]; // List of technologies used
  links: { demo?: string; repo?: string }; // Links to demo or repository
  bgColorFrom?: string; // Gradient start color
  bgColorTo?: string; // Gradient end color
  shadowColor?: string; // Shadow color
  animationIcons?: boolean; // Toggle animations
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  technologies,
  links,
  bgColorFrom = "from-red-500", // Default colors
  bgColorTo = "to-red-300",
  shadowColor = "shadow-red-500",
  animationIcons = false,
}) => {
  return (
    <Div
      className={` cursor-pointer col-span-1 p-4 rounded-2xl h-[400px] w flex flex-col justify-between bg-gradient-to-br ${bgColorFrom} ${bgColorTo} shadow-lg hover:shadow-xl transition-shadow duration-300 ${shadowColor}`}
    >
      {/* Floating Animation (Optional) */}
    

      {/* Project Image */}
      <Div className=" w-fit h-full overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </Div>

      {/* Project Content */}
      <Div className="flex flex-col gap-3">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        {/* Project Description */}
        <p className="text-sm text-gray-700">{description}</p>

        {/* Technologies Used */}
        <Div className="flex flex-wrap w-full  justify-center gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-md"
            >
              {tech}
            </span>
          ))}
        </Div>
      </Div>

      {/* Action Buttons */}
      <Div className="flex justify-between  items-center mt-4">
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            View Demo
          </a>
        )}
        {links.repo && (
          <Link
            href={links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex  justify-between h-full  gap-2 items-center bg-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Explore Project <IoIosArrowRoundForward className="text-xl"/>
          </Link>
        )}
      </Div>
    </Div>
  );
};
