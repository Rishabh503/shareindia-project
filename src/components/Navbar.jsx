import React from 'react';
import { MdOutlineDataset } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa"
import { MdOutlineMoreHoriz } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { TbView360 } from "react-icons/tb";
const Navbar = () => {
  return (
    <main className="w-full h-20 bg-gradient-to-br from-[#1e1c1c] via-[#141414] to-[#0f0f0f]  backdrop-blur-md border-b  shadow-md flex justify-between items-center px-6">
      <div className="text-white text-2xl font-bold tracking-wide">REFLECT</div>
      
      <div className="flex gap-6 text-white font-medium">
      <div className='flex gap-1 items-center'>
        <MdOutlineDataset/>
          <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">Model</p>
      </div>
        <div className='flex gap-1 items-center'>
            <VscGraph/>
            <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">DataSet</p>
        </div>
       <div className='flex gap-1 items-center'>
            <FaUserAstronaut/>
        <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">UseCase</p>
    </div>
      <div className='flex gap-1 items-center'>
        <TbView360/>
           <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">View</p>
     </div>
          <div className='flex gap-1 items-center'>
            <MdOutlineMoreHoriz/>
         <p className="hover:text-cyan-300 transition duration-300 cursor-pointer">More</p>
       </div>
      </div>
    </main>
  );
};

export default Navbar;
