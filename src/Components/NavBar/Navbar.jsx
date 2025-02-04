import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import avatar from "../../assets/image/image.png"
import flag from "../../assets/image/flag.png"
// import SideBar from '../SideBar/Sidebar';

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // function toggleSidebar() {
  //   setIsSidebarOpen(!isSidebarOpen); 
  // }
  //onClick={toggleSidebar}

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <>
      <nav className="flex items-center justify-evenly mt-4 mb-5 ps-10">
        
        <div className='flex '>
          <Button className="bg-transparent border-none hover:bg-transparent"  >
            <i className="fa-solid fa-bars text-gray-500"></i>
          </Button>
          <input
            type="text"
            id="search-navbar"
            className="w-80 p-2 text-sm text-gray-900 border border-gray-300 rounded-full
             bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />

        </div>

        <div className=" flex flex-row items-center justify-between gap-5">
          <div><i className="fa-solid fa-bell text-blue-700 text-2xl"></i></div>

          <div className="relative dropdown flex gap-4">
            <img src={flag} alt="England flag" className='w-10' />
            <button className="dropbtn" onClick={toggleDropdown}>
              English <i className="fa-solid fa-caret-down"></i>
            </button>
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-48">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Arabic
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  English
                </a>
              </div>
            )}
          </div>
          <div className='rounded-lg flex items-center gap-3 '>
            <img src={avatar} alt=" admin avatar" className='h-10 ' />
            <div className='flex flex-col items-center'>
            <span>Moni Roy</span>
            <span className='text-gray-500'>Admin</span>
          </div>
          <button className='rounded-lg '><i className="fa-solid fa-circle-chevron-down text-gray-500"></i></button>
          </div>

        </div>
      </nav>
      {/* <SideBar isOpen={isSidebarOpen}/> */}
    </>
  );
}
