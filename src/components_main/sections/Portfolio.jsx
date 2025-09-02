import React, { useEffect, useRef, useState } from "react";
import styles from "./portfolio.module.scss";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

const items = [
    {
        id: 1,
        img: "/images2/img1.png",
        title: "Full Stack Blog Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/",
    },
    {
        id: 2,
        img: "/images2/img2.png",
        title: "School Management System",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/",
    },
    {
        id: 3,
        img: "/images2/img3.png",
        title: "Real-time Chat Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/",
    },
    {
        id: 4,
        img: "/images2/img4.png",
        title: "Social Media Project",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/",
    },
    {
        id: 5,
        img: "/images2/img5.png",
        title: "Animated Portfolio Website",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
        link: "/",
    },
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
    },
};

const buttonVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeInOut" },
    },
};

const ListItem = ({ item }) => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <div className={styles.pItem} ref={ref}>
            <motion.div
                className={styles.pImg}
                variants={imgVariants}
                animate={isInView ? "animate" : "initial"}
            >
                <img src={item.img} alt={item.title} />
            </motion.div>
            <motion.div
                className={styles.pText}
                variants={textVariants}
                animate={isInView ? "animate" : "initial"}
            >
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
                <motion.a
                    href={item.link}
                    variants={buttonVariants} // Use separate variant
                    animate={isInView ? "animate" : "initial"}
                >
                    <button>View Project</button>
                </motion.a>
            </motion.div>
        </div>
    );
};

function Portfolio() {
    const [containerDistance, setContainerDistance] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setContainerDistance(rect.left);
        }
    }, []);

    const { scrollYProgress } = useScroll({ target: ref });

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -window.innerWidth * items.length]
    );

    const progressBarOpacity = useTransform(
        scrollYProgress,
       [0, 0.99, 1], // Input range
        [1, 1, 0]     // Output range
    );

    return (
        <div className={`${styles.portfolio}`} ref={ref}>
            <motion.div className={styles.pList} style={{ x: xTranslate }}>
                <div
                    className="empty"
                    style={{ width: window.innerWidth - containerDistance }}
                />
                {items.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />
            <motion.div className={styles.progress} style={{ opacity: progressBarOpacity }}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 160 160"
                    className={styles.circle}
                >
                    <circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20} />

                    <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#dd4c62" strokeWidth={20} style={{ pathLength: scrollYProgress }} transform="rotate(-90 80 80)" />
                </svg>
            </motion.div>
        </div>
    );
}

export default Portfolio;
