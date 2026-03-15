import { Html } from "@react-three/drei";
import Shape from "./Shape.jsx";

import { motion } from "motion/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Buttton from "../reUsable/Buttton.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import SpinnerTriangle from "../reUsable/SpinnerTriangle.jsx";

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

function Home() {
    const { theme } = useTheme();

    return (
        <main className="w-full h-full relative overflow-hidden grid grid-cols-2 gap-8 place-items-center tab-land:gap-0 tablet:grid-cols-1 tablet:gap-8">
            <header
                className="w-full desk-wide:w-[75%] desk-wide:ml-12 tablet:ml-0 desk-land:w-[80%]
            desktop:w-[90%] tablet:w-[80%] mob-land:w-[89%] flex flex-col justify-center items-start gap-3 tab-land:gap-0"
            >
            
                <div className="mt-4 mb-2 flex flex-col ">
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
                                className="text-responsive-2xl font-bold"
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
                                                <span className="text-[var(--color-title)] font-[700]">
                                                    {skill.text}
                                                </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </motion.span>
                            <p className="py-3 tab-land:py-0">
                                I build scaalable{" "}
                                <span className="text-[var(--color-title)]">
                                    software solutions
                                </span>{" "}
                                and extract actionable insights from{" "}
                                <span className="text-[var(--color-title)]">
                                    data
                                </span>
                                .
                            </p>
                        </motion.div>
                    </div>
                </div>

        
                <motion.aside
                    variants={sliding1}
                    initial="initial"
                    animate="animate"
                    className="flex w-full justify-between"
                >
                    <Buttton
                        className=""
                        classNameWidth="w-[7rem]"
                        id="button"
                        text="My Resume"
                        link="https://drive.google.com/file/d/1TxCywD6OBwkSUB5BNM6MIbQGDHhejgnQ/view?usp=drive_link"
                    />
                    <Buttton
                        classNameWidth="w-[7rem]"
                        id="button"
                        text="My Github"
                        link="https://github.com/Raph4sure"
                    />
                </motion.aside>
            </header>
            <header className="relative w-[25rem] h-[25rem]">
                <Canvas className="tab-land:-mt-10 tablet:-mt-18">
                    <Suspense
                        fallback={
                            <Html center>
                                <SpinnerTriangle />
                            </Html>
                        }
                    >
                        <Shape />
                    </Suspense>
                </Canvas>
                <div className="absolute z-10 top-0 left-0  w-full h-full flex items-center justify-center">
                    {theme === "light" ? (
                        <img
                            src="/images1/light_pics.png"
                            alt="profile_pics"
                            className="w-[75%] desk-wide:w-[60%] h-auto object-cover mt-6 desk-wide:-mt-8 tab-land:w-[35%] tab-land:-mt-15 tablet:-mt-35 mob-land:w-[45%] mob-land:-mt-25 mobile:-mt-25 profile-mask"
                        />
                    ) : (
                        <img
                            src="/images1/dark_pics.png"
                            alt="profile_pics"
                            className="w-[75%] desk-wide:w-[60%] h-auto object-cover mt-6 desk-wide:-mt-8 tab-land:w-[35%] tab-land:-mt-15 tablet:-mt-35 mob-land:w-[45%] mob-land:-mt-25 mobile:-mt-25 profile-mask"
                        />
                    )}
                </div>
            </header>
        </main>
       
    );
}

export default Home;
