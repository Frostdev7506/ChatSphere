import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../components/ui/NavLink";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Chatsphere</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleDrawerToggle}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        className={`${
          isDrawerOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <NavLink path="/about" label="About" />
          <NavLink path="/contact" label="Contact" />
          <NavLink path="/chat" label="Chat" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
