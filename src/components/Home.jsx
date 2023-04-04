import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen w-full flex bg-custom scrollbar-hide ">
      <div className="min-h-screen w-20 bg-custom flex justify-center flex-col ">
        <a href="https://github.com" className="text-white mt-10 px-5">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com" className="text-white mt-10 px-5">
          <FaTwitter size={30} />
        </a>
        <a href="https://linkedin.com" className="text-white mt-10 px-5 ">
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className="min-h-screen min-w-screen w-full flex flex-col  items-center bg-custom">

           <h1 className="text-6xl font-bold text-white mt-20 ">HEY, I'M YASHWANTH</h1>
           <h6 className="text-lg text-white flex justify-center mt-4  ">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
</h6>0
      </div>
    </div>
  );
};

export default Home;
