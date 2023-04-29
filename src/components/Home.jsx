import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen text-white bg-custom ">
      
        <div className="fixed flex flex-col flex-wrap justify-center invisible w-20 mt-40 h-96 md:visible">
          <a href="https://github.com/Yashwanthreddy711" target="_blank" rel="noopener noreferrer" className="px-5 mt-10 ">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/Kyashwanth711" target="_blank" rel="noopener noreferrer" className="px-5 mt-10 ">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/yashwanth-reddy-13144a1bb/" target="_blank" rel="noopener noreferrer" className="px-5 mt-10 ">
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="flex flex-col items-center w-full min-h-screen px-4 min-w-screen md:px-8 lg:px-16">
          <h1 className="p-4 text-4xl font-bold tracking-wider text-center text-white mt-60 md:text-6xl md:p-10">
            HEY, I'M YASHWANTH
          </h1>
      
          <h6 className="mt-4 text-lg text-center md:text-2xl">
            I am a frontend web developer specializing in creating beautiful and
           
          </h6> 
           <h6 className="text-lg text-center md:text-2xl">
            intuitive user interfaces for websites and web applications
          </h6>
        </div>

        <div id="about" className="w-full ">
  <div className="w-full px-4 md:px-8 lg:px-16">

   <p className="text-2xl font-bold tracking-wider text-center md:text-left md:text-4xl md:pl-2 md:ml-24">
    ABOUT</p> 
    
    <div className="flex flex-col md:flex-row ">
      <p className="w-full pt-8 ml-4 text-lg md:w-1/2 md:ml-24 md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
        velit! Amet harum deleniti tempore praesentium! Voluptas voluptates
        facere aspernatur debitis, dolor consequatur eos sint cum veritatis
        magnam libero delectus suscipit nobis, commodi harum eaque accusantium
        velit fugiat est fugit voluptatum. Commodi nostrum libero obcaecati
        dolor asperiores reiciendis suscipit magni laboriosam. Pariatur, ullam
        maiores! Tempora ad aliquam similique, amet officiis repellendus ipsa.
        Eos debitis quidem rerum aut culpa, dicta laboriosam, tempora
        exercitationem corporis magnam hic, optio repudiandae fuga assumenda at
        dolores. Cum, ex tempore! Voluptates at, exercitationem temporibus
        laboriosam blanditiis nesciunt dolore laborum vel quisquam praesentium
        perferendis, non eos nostrum doloribus!
      </p>
      <img
        src="../images/yash.jpg"
        alt="pic"
        className="hidden mt-20 ml-20 overflow-hidden h-1/2 w-72 rounded-xl drop-shadow-2xl md:block"
      />
    </div>
  </div>
</div>
      <div className="px-4 pt-8 mt-20 md:px-12 ">
      <p className="text-2xl font-bold tracking-wider text-center md:text-left md:text-4xl md:pl-2 md:ml-24">SKILLS</p>
      <div className="flex flex-wrap w-full h-auto pt-8 md:ml-24 md:w-1/2 about-skills "> 
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> HTML</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> CSS</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> JAVASCRIPT</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> REACT</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> GIT</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> MYSQL</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> POWER BI</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> TAILWIND CSS</div>
  <div className="p-2 m-2 text-base text-white border-2 border-white rounded-lg md:text-1xl"> BOOTSTRAP</div>
</div>
</div>


        
        <div className="w-24 h-8 mx-auto mt-16 bg-white rounded-md md:rounded-lg md:w-36 md:h-12 md:text-left md:ml-36 md:mx-0">
  <Link
    to={"/contact"}
    className="flex justify-center pt-1 text-lg cursor-pointer bold text-custom md:text-2xl md:pt-2 "
  >
    Contact
  </Link>
</div>
</div>
      
    </>
  );
};

export default Home;
