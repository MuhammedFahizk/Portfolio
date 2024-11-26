"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMongoose, SiJsonwebtokens, SiAxios, SiPostman, SiAmazonroute53, SiRazorpay, SiHandlebarsdotjs, SiRedux, SiReduxsaga, SiBootstrap, SiEjs, SiChartdotjs, SiNginx,SiMediamarkt, SiVercel, SiNextdotjs, SiTypescript, SiDaisyui} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { CiMail, CiFileOn } from "react-icons/ci";
export function Skills() {
  const skills = [
    { id: 1, name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { id: 2, name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { id: 4, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 5, name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38B2AC" },
    { id: 6, name: "Node.js", icon: FaNode, color: "#339933" },
    { id: 7, name: "Express.js", icon: SiExpress, color: "#000000" },
    { id: 8, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: 9, name: "Mongoose", icon: SiMongoose, color: "#800000" },
    { id: 10, name: "Redux", icon: SiRedux, color: "#764ABC" },
    { id: 11, name: "Redux Toolkit", icon: SiReduxsaga, color: "#764ABC" },
    { id: 12, name: "Bootstrap", icon: SiBootstrap, color: "#563D7C" },
    { id: 13, name: "EJS", icon: SiEjs, color: "#A91E50" },
    { id: 14, name: "Media Queries", icon: SiMediamarkt, color: "#47A248" },
    { id: 15, name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
    { id: 16, name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { id: 17, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { id: 18, name: "Daisy.UI", icon: SiDaisyui, color: "#5A67D8" },



  ];
  const tools = [
    { id: 16, name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
    { id: 17, name: "Axios", icon: SiAxios, color: "#5A29E4" },
    { id: 18, name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { id: 19, name: "AWS", icon: FaAws, color: "#FF9900" },
    { id: 20, name: "Amazon Route 53", icon: SiAmazonroute53, color: "#232F3E" },
    { id: 21, name: "Figma", icon: FiFigma, color: "#F24E1E" },
    { id: 22, name: "Razorpay", icon: SiRazorpay, color: "#02042B" },
    { id: 23, name: "Handlebars", icon: SiHandlebarsdotjs, color: "#000000" },
    { id: 24, name: "Git", icon: FaGitAlt, color: "#F05032" },
    { id: 25, name: "GitHub", icon: FaGithub, color: "#181717" },
    { id: 26, name: "Multer", icon: CiFileOn, color: "#00fede" },
    { id: 27, name: "Nodemailer", icon: CiMail, color: "#0073AA" },
    { id: 28, name: "Nginx", icon: SiNginx, color: "#009639" },
    { id: 29, name: "Vercel", icon: SiVercel, color: "#000000" },
  ];  
  return (
    <div className="h-[20rem] text-white rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed=""
      />
       <InfiniteMovingCards
        items={tools}
        direction="left"
        speed=""
      />
    </div>
  );
}


