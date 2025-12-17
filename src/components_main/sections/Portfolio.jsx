// import React, { useEffect, useRef, useState } from "react";
// import styles from "./portfolio.module.scss";
// import { motion, useInView, useScroll, useTransform } from "motion/react";
// import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

// const items = [
//     {
//         id: 1,
//         img: "/images2/img1.png",
//         title: "Full Stack Blog Application",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//         link: "/",
//     },
//     {
//         id: 2,
//         img: "/images2/img2.png",
//         title: "School Management System",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//         link: "/",
//     },
//     {
//         id: 3,
//         img: "/images2/img3.png",
//         title: "Real-time Chat Application",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//         link: "/",
//     },
//     {
//         id: 4,
//         img: "/images2/img4.png",
//         title: "Social Media Project",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//         link: "/",
//     },
//     {
//         id: 5,
//         img: "/images2/img5.png",
//         title: "Animated Portfolio Website",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//         link: "/",
//     },
// ];

// const imgVariants = {
//     initial: {
//         x: -500,
//         y: 500,
//         opacity: 0,
//     },
//     animate: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: { duration: 0.5, ease: "easeInOut" },
//     },
// };

// const textVariants = {
//     initial: {
//         x: 500,
//         y: 500,
//         opacity: 0,
//     },
//     animate: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
//     },
// };

// const buttonVariants = {
//     initial: {
//         x: 500,
//         y: 500,
//         opacity: 0,
//     },
//     animate: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: { duration: 0.4, ease: "easeInOut" },
//     },
// };

// const ListItem = ({ item }) => {
//     const ref = useRef();
//     const isInView = useInView(ref, { margin: "-100px" });

//     return (
//         <div className={styles.pItem} ref={ref}>
//             <motion.div
//                 className={styles.pImg}
//                 variants={imgVariants}
//                 animate={isInView ? "animate" : "initial"}
//             >
//                 <img src={item.img} alt={item.title} />
//             </motion.div>
//             <motion.div
//                 className={styles.pText}
//                 variants={textVariants}
//                 animate={isInView ? "animate" : "initial"}
//             >
//                 <motion.h1 variants={textVariants}>{item.title}</motion.h1>
//                 <motion.p variants={textVariants}>{item.desc}</motion.p>
//                 <motion.a
//                     href={item.link}
//                     variants={buttonVariants} // Use separate variant
//                     animate={isInView ? "animate" : "initial"}
//                 >
//                     <button>View Project</button>
//                 </motion.a>
//             </motion.div>
//         </div>
//     );
// };

// function Portfolio() {
//     const [containerDistance, setContainerDistance] = useState(0);

//     const ref = useRef(null);

//     useEffect(() => {
//         if (ref.current) {
//             const rect = ref.current.getBoundingClientRect();
//             setContainerDistance(rect.left);
//         }
//     }, []);

//     const { scrollYProgress } = useScroll({ target: ref });

//     const xTranslate = useTransform(
//         scrollYProgress,
//         [0, 1],
//         [0, -window.innerWidth * items.length]
//     );

//     const progressBarOpacity = useTransform(
//         scrollYProgress,
//        [0, 0.99, 1], // Input range
//         [1, 1, 0]     // Output range
//     );

//     return (
//         <div className={`${styles.portfolio}`} ref={ref}>
//             <motion.div className={styles.pList} style={{ x: xTranslate }}>
//                 <div
//                     className="empty"
//                     style={{ width: window.innerWidth - containerDistance }}
//                 />
//                 {items.map((item) => (
//                     <ListItem item={item} key={item.id} />
//                 ))}
//             </motion.div>
//             <section />
//             <section />
//             <section />
//             <section />
//             <section />
//             <motion.div className={styles.progress} style={{ opacity: progressBarOpacity }}>
//                 <svg
//                     width="100%"
//                     height="100%"
//                     viewBox="0 0 160 160"
//                     className={styles.circle}
//                 >
//                     <circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20} />

//                     <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#dd4c62" strokeWidth={20} style={{ pathLength: scrollYProgress }} transform="rotate(-90 80 80)" />
//                 </svg>
//             </motion.div>
//         </div>
//     );
// }

// export default Portfolio;

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./portfolio.module.scss";
import Button2 from "../reUsable/Button2";
import Buttton from "../reUsable/Buttton";
import ButttonPrev from "../reUsable/ButtonPrev";
import clsx from "clsx";

const portfolioItems = [
    {
        id: 1,
        bgColorBtn: "var(--color-project-1)", // A nice blue
        bgColor: "#7CA5FA",
        image: "/images2/img1.png",
        title: "Full Stack Blog Application",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "https://naijastay.netlify.app",
    },
    {
        id: 2,
        bgColorBtn: "var(--color-project-2)", // A nice purple
        bgColor: "#B092FA", // A nice purple
        image: "/images2/img2.png",
        title: "School Management System",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/project-2",
    },
    {
        id: 3,
        bgColorBtn: "var(--color-project-3)", // A nice green
        bgColor: "#4ED0A8", // A nice green
        image: "/images2/img3.png",
        title: "Real-time Chat Application",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/project-3",
    },
    {
        id: 4,
        bgColorBtn: "var(--color-project-4)", // A nice yellow
        bgColor: "#D38300", // A nice yellow
        image: "/images2/img4.png",
        title: "E-commerce Platform",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/project-4",
    },
];

const PortfolioSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemCount = portfolioItems.length;

    const currentProject = portfolioItems[currentSlide];
    const activeColor = currentProject ? currentProject.bgColorBtn : "#fff";

    // --- Button Logic ---
    const handleNext = () => {
        setCurrentSlide((prev) => (prev === itemCount - 1 ? 0 : prev + 1));
    };

    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev === 0 ? itemCount - 1 : prev - 1));
    };

    // --- Smooth Progress Bar Logic ---
    const motionProgress = useMotionValue(1 / itemCount);
    const smoothProgress = useSpring(motionProgress, {
        damping: 30,
        stiffness: 200,
    });

    // Updating the progress bar value whenever the current slide changes
    useEffect(() => {
        motionProgress.set((currentSlide + 1) / itemCount);
    }, [currentSlide, itemCount, motionProgress]);

    return (
        <div className={styles.sliderContainer}>

            <motion.div
                className={styles.slider}
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
                {portfolioItems.map((item) => (
                    <div
                        key={item.id}
                        className={styles.slide}
                        style={{ backgroundColor: item.bgColor }}
                    >
                        <div className={styles.content}>
                            <h2 className={styles.title}>
                                Completed Project ({item.id})
                            </h2>
                            <div className={styles.slide_content}>
                                <motion.div
                                    className={styles.imageContainer}
                                    initial={{
                                        opacity: 0,
                                        x: -500,
                                        y: -500,
                                        scale: 0,
                                    }}
                                    animate={{
                                        opacity:
                                            currentSlide === item.id - 1
                                                ? 1
                                                : 0,
                                        x:
                                            currentSlide === item.id - 1
                                                ? 0
                                                : -500,
                                        y:
                                            currentSlide === item.id - 1
                                                ? 0
                                                : -500,
                                        scale:
                                            currentSlide === item.id - 1
                                                ? 1
                                                : 0.8,
                                    }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <img src={item.image} alt={item.title} />
                                </motion.div>
                                <motion.div
                                    className={styles.textContainer}
                                    initial={{
                                        opacity: 0,
                                        x: 500,
                                        y: 500,
                                        scale: 0.25,
                                    }}
                                    animate={{
                                        opacity:
                                            currentSlide === item.id - 1
                                                ? 1
                                                : 0,
                                        x:
                                            currentSlide === item.id - 1
                                                ? 0
                                                : 500,
                                        y:
                                            currentSlide === item.id - 1
                                                ? 0
                                                : 500,
                                        scale:
                                            currentSlide === item.id - 1
                                                ? 1
                                                : 0.8,
                                    }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className={styles.textInner}>
                                        <h1 style={{ color: item.bgColorBtn }}>
                                            {item.title}
                                        </h1>
                                        <p>{item.description}</p>
                                        <a
                                            className={styles.projectLink}
                                            href={item.link}
                                        >
                                            {/* <button>View Project</button> */}
                                            <Button2
                                                className="bg-white-50 grid"
                                                buttonColor={activeColor}
                                                to={item.link}
                                            >
                                                View Project
                                            </Button2>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                            {/* Navigation Buttons */}
                            <div className={styles.navButtons}>
                                {/* <button onClick={handlePrevious}>Prev</button>
                                <button onClick={handleNext}>Next</button> */}

                                <ButttonPrev
                                    onClick={handlePrevious}
                                    text="Prev"
                                    classNameWidth="w-[5rem]"
                                />
                                <Buttton
                                    onClick={handleNext}
                                    text="Next"
                                    classNameWidth="w-[5rem]"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* --- UI Controls --- */}
            <div className={styles.uiControls}>
                {/* Progress Bar */}
                <div className={styles.progressBarContainer}>
                    <svg viewBox="0 0 100 100">
                        <circle
                            className={styles.progressTrack}
                            cx="50"
                            cy="50"
                            r="45"
                        />
                        <motion.circle
                            className={styles.progressBar}
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ pathLength: smoothProgress }}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSlider;
