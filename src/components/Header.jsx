import React from "react";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import "./Header.css" ;
//import {CgMenu,CgCloseR} from 'react-icons/cg';

const Header = () => {
  return (
    <div className="fixed z-50 w-full p-5 bg-custom drop-shadow-lg">
    <nav className="flex items-center justify-between h-full ">
      <img className="w-40 h-20 p-3" src="../images/logo.png" alt="" />
  
      <button id="hamburger-button" className="w-12 h-12 mr-0 text-3xl text-white cursor-pointer md:hidden">
        ☰
      </button>
  
      <ul id="nav-links" className="flex-wrap justify-end hidden ml-auto md:flex">
        <HashLink to={"/#home"} className="px-10 mt-2 text-white cursor-pointer">Home</HashLink>
        <HashLink to={"/#about"} className="px-10 mt-2 text-white cursor-pointer">About</HashLink>
        <Link to={"/projects"} className="px-10 mt-2 text-white cursor-pointer">Projects</Link>
        <Link to={"/contact"} className="px-10 mt-2 text-white cursor-pointer">Contact</Link>
        <div className="flex justify-center px-8 py-2 mt-1 mr-4 font-medium text-center bg-white cursor-pointer text-primary rounded-3xl">
          <a href="https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </ul> 
    </nav>
  </div>
  


  
  );
};

export default Header;


 /* <li className="inline-block px-10 text-white cursor-pointer">Home</li>
    <li className="inline-block px-10 text-white cursor-pointer">
      About
    </li>
    <li className="inline-block px-10 text-white cursor-pointer">
      Projects
    </li>
    <li className="inline-block px-10 text-white cursor-pointer">
      Contact
    </li>
     */

    /* <Link to={"https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link"} className="relative px-8 py-2 mt-1 mr-4 font-medium bg-white cursor-pointer text-primary rounded-3xl ">Resume</Link> */
/* 


<div className="invisible">
    <CgMenu/>
     <CgCloseR/>
  </div> */