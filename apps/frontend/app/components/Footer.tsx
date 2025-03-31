import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#e6802d]">
      <h1 className="w-full mt-4 pt-10 p-5 text-5xl flex justify-center font-semibold">
        Contact Us
      </h1>
      <div className="flex p-20 px-60 gap-40 w-full">
        <a href="#" className="flex text-md gap-1 hover:bg-[#f89442] p-1 rounded cursor-pointer items-center">
          <MdEmail /> johndoe@gmail.com
        </a>
        <a href="#" className="flex text-md gap-1 hover:bg-[#f89442] p-1 rounded cursor-pointer items-center">
          <FaPhoneAlt /> +91 9999999999
        </a>
        <a href="#"
        target="_blank"
        rel="noopener noreferrer" className="flex text-md gap-1 hover:bg-[#f89442] p-1 rounded cursor-pointer items-center">
          <FaLinkedin />
          Linked In
        </a>
        <a href="#"
        target="_blank"
        rel="noopener noreferrer" className="flex text-md gap-1 hover:bg-[#f89442] p-1 rounded cursor-pointer items-center">
          <FaGithub />
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
