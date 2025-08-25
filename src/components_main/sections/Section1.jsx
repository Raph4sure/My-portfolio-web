// import { Shape } from "@react-three/drei";
import Shape from "./Shape.jsx";

import { motion } from "motion/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Buttton from "../reUsable/Buttton.jsx";

const skills = [
    { text: "Software Engineer", imgPath: "/images1/Link.png" },
    { text: "Software Developer", imgPath: "/images1/Icon.png" },
    { text: "Data Scientist", imgPath: "/images1/Link.png" },
    { text: "Data Analyst", imgPath: "/images1/Icon.png" },
    { text: "Software Engineer", imgPath: "/images1/Link.png" },
    { text: "Software Developer", imgPath: "/images1/Icon.png" },
    { text: "Data Scientist", imgPath: "/images1/Link.png" },
    { text: "Data Analyst", imgPath: "/images1/Icon.png" },
];

const sliding1 = {
    initial: { x: -100, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.3 },
    },
};

function Section1() {
    return (
        <section className="relative overflow-hidden grid grid-cols-2 place-items-center tablet:grid-cols-1 gap-8 t-[1.8rem] laptop-land2:text-[1.4rem] laptop:text-[1.4rem] tablet-land:text-[1.2rem] tablet:text-[1.7rem] phone:text-[1.4rem]">
            <header className="ml-2 laptop:mr-[-2rem] tablet:mr-0">
                <div className="flex flex-col gap-7">
                    <motion.div
                        variants={sliding1}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col gap-3"
                    >
                        <motion.h1 variants={sliding1}>Hi there 👏,</motion.h1>
                        <motion.h1 variants={sliding1}>
                            I'm Alabi Raphael,
                        </motion.h1>
                        <motion.span
                            className="flex gap-2 items-center"
                            variants={sliding1}
                        >
                            <span> i am a</span>
                            <span className="slide h-[1.9rem] laptop:h-[1.5rem]">
                                <span className="wrapper">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill.text}
                                            className=" pl-2 flex gap-2 items-start laptop-land2:mb-[1.5rem]"
                                        >
                                            <img
                                                src={skill.imgPath}
                                                alt={skill.text}
                                                className="size-6 p-0.5 rounded-full bg-white-50"
                                            />
                                            <span className="mt-[-0.6rem] laptop-land2:mt-[-0.3rem] laptop:mt-[-0.3rem] tablet:mt-[-0.5rem] phone:mt-[-0.25rem]">
                                                {skill.text}
                                            </span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </motion.span>
                    </motion.div>
                </div>
                <motion.aside
                    variants={sliding1}
                    initial="initial"
                    animate="animate"
                    className="w-full grid grid-cols-2 gap-3 mt-6 laptop-land2:mt-4 laptop:mt-4 tablet:mt-3 phone:mt-2 laptop:text-[1rem]"
                >
                    <Buttton
                        variants={sliding1}
                        className="w-[80%]  laptop:w-full tablet:w-[85%] phone:w-[92%]"
                        id="button"
                        text="My Resume"
                        link="https://drive.google.com/drive/folders/14F3sKJKJ4hMEs893wt3uF9cVbVCeM8MZ?usp=sharing"
                    />
                    <Buttton
                        variants={sliding1}
                        className="w-[80%] laptop:w-full tablet:w-[85%] "
                        id="button"
                        text="My Github"
                        link="https://github.com/Raph4sure"
                    />
                </motion.aside>
            </header>
            <header className="relative w-[35rem] h-[35rem] laptop-land2:w-[19rem] laptop-land2:h-[19rem] laptop:w-[20rem] laptop:h-[20rem] tablet:w-[20rem] tablet:h-[20rem] laptop:mr-[-1rem]">
                <Canvas>
                    <Suspense fallback="Loading...">
                        <Shape />
                    </Suspense>
                </Canvas>
                <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
                    <img
                        src="/images1/crop5.png"
                        alt="profile_pics"
                        className="w-[75%] h-auto object-cover mt-6 "
                    />
                </div>
            </header>
        </section>
        // <section id="hero" className="relative overflow-hidden">
        //     <div className="absolute top-0 left-0 z-10">
        //         <img />
        //     </div>
        //     <div className="hero-layout">
        //         {/* Left side */}
        //         <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        //             <div className="flex flex-col gap-7"></div>
        //             <div className="header-text">
        //                 <h1>
        //                     Shaping <span className="slide">
        //                         <span className="wrapper">
        //                             {skills.map((skill) => (
        //                                 <span
        //                                     key={skill.text}
        //                                     className=" flex items-center md:gap-3 gap-1 pb-2"
        //                                 >
        //                                     <img
        //                                         src={skill.imgPath}
        //                                         alt={skill.text}
        //                                         className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
        //                                     />
        //                                     <span>{skill.text}</span>
        //                                 </span>
        //                             ))}
        //                         </span>
        //                     </span>
        //                 </h1>
        //                 <h1>Shaping</h1>
        //                 <h1>Shaping</h1>
        //             </div>
        //         </header>
        //         {/* Right side */}
        //     </div>
        // </section>
    );
}

export default Section1;
