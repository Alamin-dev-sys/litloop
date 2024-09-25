"use client"
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close of the nav links

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the state between true/false
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Website</div>
        <div>
          <button
           
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Always hide the links unless isOpen is true */}
        <div className={`${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-white">
            <li>
              <a href="#home" className="block py-2 lg:py-0">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 lg:py-0">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2 lg:py-0">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 lg:py-0">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
