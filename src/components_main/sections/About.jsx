import React from "react";
import ComputerModelContainer from "./services/computer/ComputerModelContainer";
import { Link } from "react-router-dom";
import Button2 from "../reUsable/Button2";
import NavigateHome from "../reUsable/NavigateHome";

function About() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen relative">
            <div>
                <h1 className="text-2xl font-bold text-center">About Me</h1>
                {/* <p className="text-[1rem] text-justify w-[95%] mx-auto -mb-30">
          Am a highly motivated and focused technology professional with
          expertise in developing scalable solutions, analyzing complex data,
          and delivering innovative software applications across multiple
          platforms and technologies.
        </p> */}
                <p className="text-[clamp(0.8rem,2vw,1rem)] text-justify w-[95%] mx-auto -pb-20">
                    I am a Data-Driven Full-Stack Software Engineer with 3+
                    years of experience and a B.Sc. in Statistics. I specialize
                    in building secured and responsive web applications, ranging
                    from an offline quiz app that cut grading time by 90% to the
                    'Digital Doctor' telemedicine platform that connect patients
                    with healthcare providers online. Leveraging my background
                    in{" "}
                    <span className="font-bold text-blue-500">
                        Backend Engineering (ALX), Software Development (PLP)
                        and Data Science (3MTT)
                    </span>
                    . I am currently mastering Cloud Infrastructure and DevOps
                    to build resilient, automated solutions.
                </p>
                <NavigateHome className="bottom-15 right-10" />
            </div>
            <div className="place-self-center w-full h-full">
                <ComputerModelContainer />
            </div>
            <div className="w-full bg-blue-500 h-full grid grid-cols-3 place-items-center text-[clamp(0.5rem,2vw,1rem)] my-1">
                <aside>
                    <p>&copy; 2025 raphweb.tech</p>
                </aside>
                <aside className="flex gap-1">
                    <Link>
                        <img
                            src="/footer_img/github.svg"
                            alt="Github Logo"
                            className="w-[clamp(0.5rem,1.7vw,1.5rem)] object-contain"
                        />
                    </Link>
                    <Link>
                        <img
                            src="/footer_img/linkedin.png"
                            alt="LinkedIn Logo"
                            className="w-[clamp(1rem,2vw,2rem)] object-contain"
                        />
                    </Link>
                    <Link>
                        <img
                            src="/footer_img/twitter.png"
                            alt="Twitter Logo"
                            className="w-[clamp(1rem,2vw,2rem)] object-contain"
                        />
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
