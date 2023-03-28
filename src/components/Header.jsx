import React from "react";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
    <div className="container h-25 min-w-max bg-custom p-5 drop-shadow-lg">
    <nav className="flex items-center">
  <img className="w-40 h-20 px-5 pt-3" src="../images/logo.png" alt="" />
  <ul className="flex w-full justify-end">
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
            <HashLink to = {"/#home"} className="cursor-pointer inline-block px-10  text-white">Home</HashLink>
            <HashLink to = {"/#about"} className="cursor-pointer inline-block px-10 text-white">About</HashLink>
            <Link to= {"/projects"} className="cursor-pointer inline-block px-10 text-white">Projects</Link>
            <Link to={"/contact"} className="cursor-pointer inline-block px-10 text-white">Contact</Link>
            <Link to={"/resume"} className="cursor-pointer inline-block px-10 text-white">Resume</Link>
  </ul>
</nav>


    </div>
  );
};

export default Header;
