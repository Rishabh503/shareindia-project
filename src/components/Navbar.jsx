import React, { useState } from 'react';
import { MdOutlineDataset, MdOutlineMoreHoriz } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { TbView360 } from "react-icons/tb";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-full h-20 bg-gradient-to-br from-[#1e1c1c] via-[#141414] to-[#0f0f0f] backdrop-blur-md border-b shadow-md flex justify-between items-center px-6 relative">
      <div className="text-white text-2xl font-bold tracking-wide">REFLECT</div>

      {/* Desktop Menu */}
      <div className="gap-6 hidden sm:flex text-white font-medium">
        <div className="flex gap-1 items-center">
          <MdOutlineDataset />
          <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">Model</p>
        </div>
        <div className="flex gap-1 items-center">
          <VscGraph />
          <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">DataSet</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaUserAstronaut />
          <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">UseCase</p>
        </div>
        <div className="flex gap-1 items-center">
          <TbView360 />
          <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">View</p>
        </div>
        <div className="flex gap-1 items-center">
          <MdOutlineMoreHoriz />
          <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">More</p>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-br from-[#1e1c1c] via-[#141414] to-[#0f0f0f] text-white flex flex-col gap-4 py-4 px-6 sm:hidden z-50 shadow-md">
          <div className="flex gap-2 items-center">
            <MdOutlineDataset />
            <p className="hover:text-cyan-300 cursor-pointer">Model</p>
          </div>
          <div className="flex gap-2 items-center">
            <VscGraph />
            <p className="hover:text-cyan-300 cursor-pointer">DataSet</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaUserAstronaut />
            <p className="hover:text-cyan-300 cursor-pointer">UseCase</p>
          </div>
          <div className="flex gap-2 items-center">
            <TbView360 />
            <p className="hover:text-cyan-300 cursor-pointer">View</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineMoreHoriz />
            <p className="hover:text-cyan-300 cursor-pointer">More</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Navbar;
