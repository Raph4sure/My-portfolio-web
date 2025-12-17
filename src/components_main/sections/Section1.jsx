import { Html } from "@react-three/drei";
import Shape from "./Shape.jsx";

import { motion } from "motion/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Buttton from "../reUsable/Buttton.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import Button2 from "../reUsable/Button2.jsx";

const skills = [
    { text: "Software Engineer", imgPath: "/images1/software_engineer.png" },
    { text: "Software Developer", imgPath: "/images1/software_developer2.png" },
    { text: "Data Scientist", imgPath: "/images1/data_scientist.png" },
    { text: "Data Analyst", imgPath: "/images1/data_analyst.png" },
    { text: "Software Engineer", imgPath: "/images1/software_engineer.png" },
    { text: "Software Developer", imgPath: "/images1/software_developer2.png" },
    { text: "Data Scientist", imgPath: "/images1/data_scientist.png" },
    { text: "Data Analyst", imgPath: "/images1/data_analyst.png" },
];

const sliding1 = {
    initial: { x: -100, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.4 },
    },
};

function Section1() {
    const { theme } = useTheme();

    return (
        <main className="w-full h-full relative overflow-hidden grid grid-cols-2 place-items-center tab-land:grid-cols-1 gap-8 t-[1.8rem] ">
            <header
                className="w-full desk-wide:w-[75%] desk-wide:ml-12 tab-land:ml-0 desk-land:w-[80%]
            desktop:w-[90%] tab-land:w-[80%] mob-land:w-[89%] flex flex-col justify-center items-start gap-3"
            >
                {/* <div className="flex flex-col gap-7 ml-10 mob-land:-ml-4 tablet:-ml-20 tab-land:ml-15 desktop:ml-12 desk-med:ml-12 desk-land:ml-12 desk-wide:ml-15 mt-3"> */}
                <div className="mt-4 mb-2 flex flex-col">
                    <div className="">
                        <motion.div
                            variants={sliding1}
                            initial="initial"
                            animate="animate"
                            className="flex flex-col gap-3"
                        >
                            <motion.h1 variants={sliding1}>
                                Hi there 👏,
                            </motion.h1>
                            <motion.h1
                                variants={sliding1}
                                className="text-responsive-3xl font-bold"
                            >
                                I'm Alabi Raphael,
                            </motion.h1>
                            <motion.span
                                className="flex gap-2 items-center"
                                variants={sliding1}
                            >
                                <span> Am a</span>
                                <span className="slide h-[1.5rem]">
                                    <span className="wrapper">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="pl-2 flex gap-2 item"
                                            >
                                                <img
                                                    src={skill.imgPath}
                                                    alt={skill.text}
                                                    className="size-6 p-0.5 rounded-full bg-white-50"
                                                />
                                                <span className="text-blue-700 font-[700]">
                                                    {skill.text}
                                                </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </motion.span>
                            <p className="py-3">
                                I build scaalable{" "}
                                <span className="text-blue-700">
                                    software solutions
                                </span>{" "}
                                and extract actionable insights from{" "}
                                <span className="text-blue-700">data</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* <motion.aside
                    variants={sliding1}
                    initial="initial"
                    animate="animate"
                    className="w-full grid grid-cols-2 place-items-center gap-3 phone:gap-1 tablet:gap-0 mt-6 laptop-land2:mt-4 laptop:mt-4 tablet:mt-3 phone:mt-2 tab-land:ml-2 tab-land:gap-0 desktop:ml-5 "
                > */}
                <motion.aside
                    variants={sliding1}
                    initial="initial"
                    animate="animate"
                    className="flex w-full justify-between"
                >
                    <Buttton
                        // variants={sliding1}
                        className=""
                        classNameWidth="w-[7rem]"
                        id="button"
                        text="My Resume"
                        link="https://drive.google.com/drive/folders/14F3sKJKJ4hMEs893wt3uF9cVbVCeM8MZ?usp=sharing"
                    />
                    <Buttton
                        // variants={sliding1}
                        // className="tab-land:-pl-2"
                        classNameWidth="w-[7rem]"
                        id="button"
                        text="My Github"
                        link="https://github.com/Raph4sure"
                    />
                    {/* <Button2/> */}
                </motion.aside>
            </header>
            <header className="relative w-[25rem] h-[25rem] laptop:w-[20rem] laptop:h-[20rem] tablet:w-[20rem] tablet:h-[20rem] laptop:mr-[-1rem] phone:w-[14rem] phone:h-[20rem] phone:-mt-5">
                {/* <div className=""> */}
                <Canvas className="tab-land:-mt-18">
                    <Suspense fallback={<Html center>Loading...</Html>}>
                        <Shape />
                    </Suspense>
                </Canvas>
                {/* </div> */}
                <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
                    {theme === "light" ? (
                        <img
                            src="/images1/light_pics.png"
                            alt="profile_pics"
                            className="w-[75%] desk-wide:w-[60%] h-auto object-cover mt-6 desk-wide:-mt-8 tab-land:w-[35%] tab-land:-mt-39 tablet:-mt-35 mob-land:w-[45%] mob-land:-mt-25 mobile:-mt-25"
                        />
                    ) : (
                        <img
                            src="/images1/dark_pics.png"
                            alt="profile_pics"
                            className="w-[75%] h-auto object-cover mt-6 "
                        />
                    )}
                </div>
            </header>
        </main>
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
