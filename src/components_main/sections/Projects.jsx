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
        bgColorBtn: "var(--color-project-1)",
        // bgColor: "#fdb0b0",
        bgColor: "var(--color-background)",
        image: "/images2/digital_doctor.png",
        title: "Full-Stack (Digital Doctor)",
        description:
            "This is a full-stack web application that connects patients with doctors for online appointment booking, eliminating hospital visits. Built with Node.js, Express, and MySQL, it features secure authentication, role-based dashboards for patients, doctors, and admins, session management",
        link: "https://digital-doctor.onrender.com",
    },
    {
        id: 2,
        bgColorBtn: "var(--color-project-2)", // A nice purple
        // bgColor: "#B092FA", // A nice purple
        bgColor: "var(--color-background)",
        image: "/images2/pizza-shopping.png",
        title: "Frontend (Pizza Shopping)",
        description:
            "This is a React-based web application for ordering pizza online, featuring a dynamic menu, shopping cart functionality, and responsive design. Built with modern JavaScript and CSS, it allows users to browse pizza options, add items to their cart, and simulate the checkout process for a seamless food ordering experience",
        link: "https://pizzas-shops.vercel.app",
    },
    {
        id: 3,
        bgColorBtn: "var(--color-project-3)", // A nice green
        bgColor: "var(--color-background)",
        // bgColor: "#4ED0A8", // A nice green
        image: "/images2/habit_tracking.png",
        title: "Backend (Habit Tracking)",
        description:
            "This API is a RESTful backend service built with Node.js and Express that helps users build and maintain daily habits through automated tracking. It features user authentication with JWT tokens, CRUD operations for habits, streak counting, progress analytics, and daily reminders.",
        link: "https://github.com/Raph4sure/habit_tracking_api",
    },
];

const Projects = () => {
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
                            <h2
                                data-content={`Project (${item.id})`}
                                className={clsx(styles.headers, styles.title)}
                            >
                                Project ({item.id})
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
                            <div className={styles.navButtons}>
                         

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

export default Projects;
