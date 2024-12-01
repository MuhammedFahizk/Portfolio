import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Div } from "../Common/Div";
import Image from "next/image";

export const Contact = () => {
  // Array of contact links
  const contactLinks = [
    {
      href: "mailto:fahizk100@gmail.com",
      label: "Email",
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
    },
    {
      href: "https://github.com/MuhammedFahizk",
      label: "GitHub",
      icon: <FaGithub className="text-xl sm:text-2xl" />,
      external: true, // Flag for external links
    },
    {
      href: "https://wa.me/9961130563",
      label: "WhatsApp",
      icon: <FaWhatsapp className="text-xl sm:text-2xl" />,
      external: true,
    },
    {
      href: "https://www.instagram.com/fahiz_._k/",
      label: "Instagram",
      icon: <FaInstagram className="text-xl sm:text-2xl" />,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/muhammed-fahiz-96726b287",
      label: "LinkedIn",
      icon: <FaLinkedin className="text-xl sm:text-2xl" />,
      external: true,
    },
  ];

  return (
    <Div className="bg-base-100 text-neutral p-2 md:p-6 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-4 sm:space-y-6">
      {/* Image Section */}
      <Div className="flex justify-center relative w-full h-72 sm:h-80 md:h-[300px]">
        <Image
          src="/my-pic.jpg"
          alt="Profile"
          className="shadow-md object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-300"
          layout="fill"
          objectFit="cover"
        />
      </Div>

      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
        Reach Out to Me
      </h2>

      {/* Icons with Links */}
      <Div className="flex justify-center flex-wrap gap-4 bg-secondary shadow-inner p-2 sm:p-4 rounded-xl">
        {contactLinks.map(({ href, label, icon, external }, index) => (
          <Link
            key={index}
            href={href}
            passHref
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Div
              className=" p-1 sm:p-3 bg-neutral text-base-100 rounded-full hover:bg-primary transition duration-300 cursor-pointer"
              aria-label={label}
            >
              {icon}
            </Div>
          </Link>
        ))}
      </Div>

      {/* Closing Message */}
      <Div className="text-center px-6">
        <p className="text-sm md:text-base">
          Feel free to contact me through any of these platforms. I’d love to connect with you!
        </p>
      </Div>
    </Div>
  );
};
