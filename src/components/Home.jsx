import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen w-full   bg-custom scrollbar-hide ">
      <div className="h-96 w-20 bg-custom fixed flex justify-center flex-col flex-wrap invisible md:visible">
  <a href="https://github.com" className="text-white mt-10 px-5">
    <FaGithub size={30} />
  </a>
  <a href="https://twitter.com" className="text-white mt-10 px-5">
    <FaTwitter size={30} />
  </a>
  <a href="https://linkedin.com" className="text-white mt-10 px-5">
    <FaLinkedin size={30} />
  </a>
</div>


<div className="min-h-screen min-w-screen w-full flex flex-col items-center bg-custom px-4 md:px-8 lg:px-16">
  <h1 className="text-4xl md:text-6xl font-bold text-white text-center p-4 md:p-10 tracking-wider">
    HEY, I'M YASHWANTH
  </h1>
  <h6 className="text-lg md:text-2xl text-white text-center mt-4">
    I am a frontend web developer specializing in creating beautiful and </h6>
  <h6 className="text-lg md:text-2xl text-white text-center mt-4">
    intuitive user interfaces for websites and web applications
  </h6>
</div>

      

      <div id="about">
        <div className="w-full min-h-screen min-w-screen -mt-32 bg-custom justify-space px-4 md:px-8 lg:px-16">
          <h1 className="text-6xl font-bold text-white ml-96 tracking-wider   ">
            ABOUT ME
          </h1>
          <div className="flex h-auto min-w-screen">
            <p className="text-white px-32 text-xl w-1/2 ml-32  pt-20  bg-custom">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              velit! Amet harum deleniti tempore praesentium! Voluptas
              voluptates facere aspernatur debitis, dolor consequatur eos sint
              cum veritatis magnam libero delectus suscipit nobis, commodi harum
              eaque accusantium velit fugiat est fugit voluptatum. Commodi
              nostrum libero obcaecati dolor asperiores reiciendis suscipit
              magni laboriosam. Pariatur, ullam maiores! Tempora ad aliquam
              similique, amet officiis repellendus ipsa. Eos debitis quidem
              rerum aut culpa, dicta laboriosam, tempora exercitationem corporis
              magnam hic, optio repudiandae fuga assumenda at dolores. Cum, ex
              tempore! Voluptates at, exercitationem temporibus laboriosam
              blanditiis nesciunt dolore laborum vel quisquam praesentium
              perferendis, non eos nostrum doloribus!
            </p>
            <img
              src="../images/yash.jpg"
              alt="pic"
              className="w-72 h-1/2 ml-36 rounded-xl mt-24 overflow-hidden drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-1/12 h-12 flex justify-center items-center rounded-md bg-white ml-96 -mt-20">
      <Link to={"/contact"} className="cursor-pointer text-center text-custom">Contact</Link>
        {/* <h1 className="text-center text-custom">Contact Me </h1> */}
      </div>
      </div>
    </>
  );
};

export default Home;
