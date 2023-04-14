import React from "react";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {CgMenu,CgCloseR} from 'react-icons/cg';

const Header = () => {
  return (
    <div className=" h-23  bg-white p-5 drop-shadow-lg   ">
    <nav className="flex  w-full  items-center py-2 ">
  <img className="w-40 h-20 px-5 pt-3" src="../images/logo.png" alt="" />
  <ul className="flex flex-wrap w-full justify-end ">
    {/* <li className="cursor-pointer inline-block px-10 text-white">Home</li>
    <li className="cursor-pointer inline-block px-10 text-white">
      About
    </li>
    <li className="cursor-pointer inline-block px-10 text-white">
      Projects
    </li>
    <li className="cursor-pointer inline-block px-10 text-white">
      Contact
    </li>
     */}
            <HashLink to = {"/#home"} className="cursor-pointer  px-10 mt-2  ">Home</HashLink>
            <HashLink to = {"/#about"} className="cursor-pointer  px-10 mt-2 ">About</HashLink>
            <Link to= {"/projects"} className="cursor-pointer  px-10 mt-2 ">Projects</Link>
            <Link to={"/contact"} className="cursor-pointer  px-10 mt-2 ">Contact</Link>
            <div className="cursor-pointer  relative  text-primary bg-white  rounded-3xl mt-1 py-2 px-8 font-medium  mr-4  ">
              <a href="https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
            {/* <Link to={"https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link"} className="cursor-pointer  relative  text-primary bg-white  rounded-3xl mt-1 py-2 px-8 font-medium  mr-4  ">Resume</Link> */}
            
  </ul>
  <div className="invisible">
    <CgMenu/>
     <CgCloseR/>
  </div>
</nav>
    </div>
  );
};

export default Header;
