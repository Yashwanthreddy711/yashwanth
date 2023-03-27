import React from "react";

const Header = () => {
  return (
    <div className="container min-h-screen min-w-max bg-custom p-5 ">
    <nav className="flex items-center">
  <img className="w-40 h-20 px-5 pt-3" src="../images/logo.png" alt="" />
  <ul className="flex w-full justify-end">
    <li className="cursor-pointer inline-block px-10 text-white">Home</li>
    <li className="cursor-pointer inline-block px-10 text-white">
      About
    </li>
    <li className="cursor-pointer inline-block px-10 text-white">
      Projects
    </li>
    <li className="cursor-pointer inline-block px-10 text-white">
      Contact
    </li>
  </ul>
</nav>


    </div>
  );
};

export default Header;
