import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <div className="min-h-screen min-w-screen w-full flex  bg-custom scrollbar-hide ">
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
    <div className="min-h-screen min-w-screen w-full flex flex-col items-center mt-20 bg-custom">
  <h1 className="text-6xl font-bold text-white p-10 tracking-wider  ">HEY, I'M YASHWANTH</h1>
  <h6 className="text-2xl text-white flex mt-4">I am a frontend web developer specializing in creating beautiful and </h6>
  <h6 className="text-2xl text-white flex mt-4"> intuitive user interfaces for websites and web applications</h6>
 </div>
 </div>

 <div  id="about">
        <div className="w-full min-h-screen min-w-screen -mt-12 bg-custom justify-space"> 
          <h1 className="text-6xl font-bold text-white ml-96 tracking-wider   ">About</h1>
          <div className="flex min-h-screen min-w-screen">
          <p className="text-white px-32 text-xl w-1/2 ml-32 pr-32 pt-40  bg-custom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            velit! Amet harum deleniti tempore praesentium! Voluptas voluptates
            facere aspernatur debitis, dolor consequatur eos sint cum veritatis
            magnam libero delectus suscipit nobis, commodi harum eaque
            accusantium velit fugiat est fugit voluptatum. Commodi nostrum
            libero obcaecati dolor asperiores reiciendis suscipit magni
            laboriosam. Pariatur, ullam maiores! Tempora ad aliquam similique,
            amet officiis repellendus ipsa. Eos debitis quidem rerum aut culpa,
            dicta laboriosam, tempora exercitationem corporis magnam hic, optio
            repudiandae fuga assumenda at dolores. Cum, ex tempore! Voluptates
            at, exercitationem temporibus laboriosam blanditiis nesciunt dolore
            laborum vel quisquam praesentium perferendis, non eos nostrum
            doloribus!
          </p>
          <img src="../images/yash.jpg" alt="pic" className="w-80 h-1/2 ml-36 rounded-xl mt-40 overflow-hidden" />
          </div>
        </div>
      </div>
      </>
    
  );
};

export default Home;
