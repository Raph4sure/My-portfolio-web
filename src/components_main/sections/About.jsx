import React from "react";
import ComputerModelContainer from "./services/computer/ComputerModelContainer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <div>
        <h1 className="text-2xl font-bold text-center">About Me</h1>
        <p className="text-[1rem] text-justify w-[95%] mx-auto -mb-30">
          Am a highly motivated and focused technology professional with
          expertise in developing scalable solutions, analyzing complex data,
          and delivering innovative software applications across multiple
          platforms and technologies.
        </p>
      </div>
      <div className="place-self-center w-full h-[90%]">
        <ComputerModelContainer />
      </div>
      <div className="w-full bg-red-600 h-10 grid grid-cols-3 place-items-center">
        <aside>
          <p>&copy; 2025 Alabi Raphael</p>
        </aside>
        <aside className="flex gap-3">
          <Link>
            <img src="/footer_img/github.png" alt="Github Logo" />
          </Link>
          <Link>
            <img src="/footer_img/linkedin.png" alt="LinkedIn Logo" />
          </Link>
          <Link>
            <img src="/footer_img/twitter.png" alt="Twitter Logo" />
          </Link>
        </aside>
        <aside>
          <p>All rights reserved</p>
        </aside>
      </div>
    </div>
  );
}

export default About;
