"use client";
import React from "react";
import { Div } from "./Index";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

type CardProps = {
  image: string; // Path to the project image
  title: string; // Project title
  description: string; // Short project description
  technologies: string[]; // List of technologies used
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
    <Div
      onClick={onOpen}
      className={`cursor-pointer col-span-1 p-4 rounded-2xl h-full flex flex-col justify-between bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Project Image */}
      <Div
        className="relative w-full h-56 overflow-hidden rounded-lg mb-4"
        style={{ height: "160px" }} // Ensures consistent height for all images
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover", // Ensures the image covers the container
            height: "100%", // Makes the image fit the container height
          }}
          className="rounded-lg hover:scale-105 transition-all"
        />
      </Div>

      {/* Project Content */}
      <Div className="flex flex-col gap-1">
        {/* Project Title */}
        {/* Action Buttons */}
        <Div className="flex justify-between items-center mt-4 h-full items-center">
          <h3 className="text-xl font-bold text-gray-200">{title}</h3>

          <Div className="flex  gap-1 ">
            {links.repo && (
              <Link
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex justify-between h-full gap-2 items-center bg-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                <FaGithubSquare />
              </Link>
            )}
            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <FaRegEye />
              </Link>
            )}
          </Div>
        </Div>
        {/* Technologies Used */}
        <Div className="flex flex-wrap w-full justify-center my-2 gap-1 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-br from-[#1c396890] to-[#7272f466] text-sm border text-gray-200 py-1 px-2 rounded-md"
            >
              {tech}
            </span>
          ))}
        </Div>
        {/* Project Description */}
        <p className="text-sm text-gray-400">{description}</p>
      </Div>
    </Div>
  );
};
