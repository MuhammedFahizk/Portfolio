"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, Card, Div , Modal} from "../Common/Index";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FaGithubSquare, FaRegEye } from "react-icons/fa";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  details?: string;
  links: {
    demo?: string;
    repo?: string;
  };
}


export const Projects = () => {
  const projects: Project[] = [
    {
      image: "/images/ChatHive.png",
      title: "Chat Hive",
      description:
        "A real-time chatting application featuring Socket.IO for seamless communication, with a focus on responsive design and intuitive UI.",
      technologies: ["React", "Node.js", "Tailwind css" ,"Socket.IO", "Express", "MongoDB"],
       details: " A dynamic social media platform built using the MERN stack (MongoDB, Express, React, Node.js) following the MVC architecture. The platform features secure user authentication via JWT (JSON Web Token) and supports role-based access for admins and users. Users can engage in real-time messaging with Socket.IO, post feeds, share stories, write blogs, and interact through comments and likes. Additionally, users have the ability to report inappropriate content or users and hide posts they do not wish to see. Admins have full control to manage users, posts, reports, and notifications. The website is fully responsive thanks to Tailwind CSS, and ESLint ensures high code quality and consistency throughout the project."  ,
       links: {
        demo: "https://chathivemedia.vercel.app/",
        repo: "https://github.com/MuhammedFahizk/Social-Media-Frontend",
      },
    },
    {
      image: "/images/DriveWave.png",
      title: "Drive Wave",
      description:
        "A car rental application built with a Handlebars.js (HBS) frontend, offering secure payment options, efficient booking system, and intuitive user management tools.",
      technologies: ["Node.js", "MongoDB", "Express", "Razorpay", "Handlebars"],
      details: 
      "Drive Wave is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
      links: {
        demo: "https://www.drivewave.site/",
        repo: "https://github.com/MuhammedFahizk/drive-Wave",
      },
    },
    {
      image: "/images/SpotifyClone.png",
      title: "Spotify Clone",
      description:
        "A music streaming application similar to Spotify, integrated with the Shopify API for showcasing music collections while leveraging a custom database for authentication and user management.",
      technologies: ["Spotify API", "React", "Tailwind css" ,  "Node.js", "Express", "MongoDB"],
      details: 
      "A responsive Spotify frontend clone built using React, featuring seamless integration with Spotify's original API for music-related functionalities such as fetching tracks, albums, and artist details. User authentication and playlist management are handled through a custom backend built with Node.js and Express, using JWT for secure access and refresh tokens for session management. User-generated playlists are stored in a dedicated database, while all music streaming and browsing data are fetched directly from Spotify's API, ensuring a rich and authentic user experience.",

      links: {
        demo: "https://track-me-demo.com",
        repo: "https://github.com/MuhammedFahizk/TrackVoice",
      },
    },
  ];

  // State to manage modal data
  const [selectedProject, setSelectedProject] = useState<Project | null >(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
   <>
    <Div
      id="projects"

      className="my-20 py-10 px-4 sm:px-2 lg:px-8 xl:px-10 flex flex-col justify-center items-center"
    >

      
      {/* Section Title */}
      <h1 className="text-3xl font-acme   md:text-4xl font-bold mb-10 text-center text-primary">
        Favorites
      </h1>

      {/* Project Cards */}
      <Div className="grid gap-6 lg:px-10 sm:px-6 sm:gap-8 min-w-screen-[100px] w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            {...project}
            onOpen={() => handleOpenModal(project)}
          />
        ))}
      </Div>


  
      <Button className="my-10 bg-secondary hover:scale-105">
        <Link
          className="flex justify-center h-full items-center gap-2"
          href={"https://github.com/MuhammedFahizk"}
        >
          <FaSquareGithub className="text-xl" /> Explore More Projects
          <IoIosArrowRoundForward className="text-xl" />
        </Link>
      </Button>
    </Div>
        {/* Modal */}
        {selectedProject && (
          <Modal onClose={handleCloseModal}>
            <Div className="flex flex-col items-center">
            <Image
  src={selectedProject.image}
  alt={selectedProject.title}
  layout="responsive"
  width={700} // Specify desired width
  height={100} // Specify desired height
  className="w-full h-64 object-cover rounded-lg shadow-md"
/>

              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="mb-4 text-center">{selectedProject.details}</p>
              <Div className="flex flex-wrap  w-full justify-center my-2 gap-1 mt-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-br from-[#1c396890] to-[#7272f466] text-sm border text-gray-200 py-1 px-2 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </Div>
              <Div className="flex justify-end mt-4 gap-2">
                {selectedProject.links.repo && (
                  <Link
                    href={selectedProject.links.repo}
                    target="_blank"
                    className="text-white flex gap-2 justify-center items-center bg-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                <FaGithubSquare />

                    GitHub
                  </Link>
                )}
                {selectedProject.links.demo && (
                  <Link
                    href={selectedProject.links.demo}
                    target="_blank"
                    className="text-white flex gap-2 justify-center items-center bg-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                <FaRegEye />

                    Demo
                  </Link>
                )}
              </Div>
            </Div>
          </Modal>
        )}
  
   </>
  );
};
