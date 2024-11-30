import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, Card, Div } from "../Common/Index";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

export const Projects = () => {
    const projects = [
      {
        image: "/images/chat-hive.png",
        title: "Chat Hive",
        description:
          "A real-time chatting application featuring Socket.IO for seamless communication, with a focus on responsive design and intuitive UI.",
        technologies: ["React", "Node.js", "Socket.IO", "Express", "MongoDB"],
        links: {
          repo: "https://github.com/MuhammedFahizk/Social-Media-Frontend",
        },
        bgColorFrom: "from-indigo-500",
        bgColorTo: "to-purple-500",
        shadowColor: "shadow-indigo-500",
      },
      {
        image: "/images/drive-wave.png",
        title: "Drive Wave",
        description:
          "A car rental application built with a Handlebars.js (HBS) frontend, offering secure payment options, efficient booking system, and intuitive user management tools.",
        technologies: ["Node.js", "MongoDB", "Express", "Razorpay", "Handlebars"],
        links: {
          demo: "https://www.drivewave.site/",
          repo: "https://github.com/MuhammedFahizk/drive-Wave",
        },
        bgColorFrom: "from-green-500",
        bgColorTo: "to-teal-400",
        shadowColor: "shadow-green-500",
      },
      {
        image: "/images/track-me.png",
        title: "Track Me",
        description:
          "A music streaming application similar to Spotify, integrated with the Shopify API for showcasing music collections while leveraging a custom database for authentication and user management.",
        technologies: ["spotify API", "React", "Node.js", "Express", "MongoDB"],
        links: {
          demo: "https://track-me-demo.com",
          repo: "https://github.com/MuhammedFahizk/TrackVoice",
        },
        bgColorFrom: "from-blue-500",
        bgColorTo: "to-cyan-400",
        shadowColor: "shadow-blue-500",
      },
    ];
  
    return (
      <Div className="my-20 py-10 px-4 sm:px-2 lg:px-8 xl:px-10 flex flex-col justify-center items-center  ">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
          Favorites
        </h1>
  
        {/* Project Cards */}
        <Div className="grid gap-6 lg:px-10 sm:px-6 sm:gap-8 min-w-screen-[100px] w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
              bgColorFrom={project.bgColorFrom}
              bgColorTo={project.bgColorTo}
              shadowColor={project.shadowColor}
            />
          ))}
        </Div>
        <Button className="my-10  bg-secondary hover:scale-105 ">
        <Link className='flex justify-center h-full items-center gap-2' href={'https://github.com/MuhammedFahizk'} >
        <FaSquareGithub className="text-xl"/> Explore More Projects  <IoIosArrowRoundForward className="text-xl"/>
        </Link>
        </Button>
      </Div>
    );
  };
  