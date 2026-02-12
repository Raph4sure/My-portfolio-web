import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import images from "../../helpers/imageLoader.";
import styles from "./certification.module.scss";
import Buttton from "../reUsable/Buttton";
import ButttonPrev from "../reUsable/ButtonPrev";

const certificateItems = [
    // {
    //     id: 1,
    //     img: images["certificate/BSc_Stats.png"],
    //     title: "B.Sc Statistics",
    // },
    {
        id: 2,
        img: images["certificate/Alx.png"],
        title: "Software Engineering(Backend)",
    },
    {
        id: 3,
        img: images["certificate/PLP.png"],
        title: "Software Development(FullStack)",
    },
    {
        id: 4,
        img: images["certificate/DIF.jpg"],
        title: "DIF (Internship)",
    },
    {
        id: 5,
        img: images["certificate/Web_Dev.jpg"],
        title: "Udemy (Web Development)",
    },
    {
        id: 6,
        img: images["certificate/React_cert.jpg"],
        title: "Udemy (React, Next.js Course)",
    },
    {
        id: 7,
        img: images["certificate/Typescript.png"],
        title: "LinkedIn (TypeScript Course)",
    },
    {
        id: 8,
        img: images["certificate/INCO.png"],
        title: "INCO (Green Digital Skills)",
    },
    {
        id: 9,
        img: images["certificate/Data_Science.png"],
        title: "Hp Life (Data Science and Analytics)",
    },
    {
        id: 10,
        img: images[
            "certificate/Data_Science_in_Precision_Medicine_and_Cloud_Computing.jpg"
        ],
        title: "Stanford Medicine (Data Science)",
    },
    {
        id: 11,
        img: images["certificate/Data Analysis certificate.jpg"],
        title: "Udemy (Python Data Analysis)",
    },
    {
        id: 12,
        img: images["certificate/Oracle_new.jpg"],
        title: "Power Concept (Oracle D.B Admin)",
    },
];

// Custom hook to get screen width
const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

// --- DESKTOP VARIANTS (Horizontal) ---
const desktopCardVariants = {
    center: { x: "0%", y: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-50%", y: "0%", scale: 0.7, zIndex: 3, opacity: 1 },
    left: { x: "-90%", y: "0%", scale: 0.5, zIndex: 2, opacity: 1 },
    right: { x: "90%", y: "0%", scale: 0.5, zIndex: 1, opacity: 1 },
    right1: { x: "50%", y: "0%", scale: 0.7, zIndex: 3, opacity: 1 },
    hide: { x: "0%", y: "0%", scale: 0, opacity: 0, zIndex: 0 },
};

// --- MOBILE VARIANTS (Vertical) ---
const mobileCardVariants = {
    center: { y: "0%", x: "0%", scale: 1.2, zIndex: 5, opacity: 1 },
    top1: { y: "-95%", x: "0%", scale: 0.7, zIndex: 3, opacity: 1 },
    top2: { y: "-155%", x: "0%", scale: 0.5, zIndex: 2, opacity: 1 },
    bottom1: { y: "95%", x: "0%", scale: 0.7, zIndex: 3, opacity: 1 },
    bottom2: { y: "155%", x: "0%", scale: 0.5, zIndex: 2, opacity: 1 },
    hide: { y: "0%", x: "0%", scale: 0, opacity: 0, zIndex: 0 },
};

const Certification = () => {
    const imageCount = certificateItems.length;

    // 1. Our state is now just a single number: the index of the image in the center.
    const [centerIndex, setCenterIndex] = useState(0);

    // Get live window width
    const width = useWindowWidth();
    const isMobile = width < 768;

    const cardVariants = isMobile ? mobileCardVariants : desktopCardVariants;

    // 2. The button handlers are now much simpler.
    const handleNext = () => {
        setCenterIndex((prevIndex) => (prevIndex + 1) % imageCount);
    };

    const handleBack = () => {
        setCenterIndex(
            (prevIndex) => (prevIndex + imageCount - 1) % imageCount
        );
    };

    // const cardVariants = {
    //     center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    //     left1: { x: "-50%", scale: 0.7, zIndex: 3, opacity: 1 },
    //     left: { x: "-90%", scale: 0.5, zIndex: 2, opacity: 1 },
    //     right: { x: "90%", scale: 0.5, zIndex: 1, opacity: 1 },
    //     right1: { x: "50%", scale: 0.7, zIndex: 3, opacity: 1 },
    //     hide: { scale: 0, opacity: 0, zIndex: 0 },
    // };

    return (
        <div className="w-full h-full grid grid-rows-[auto_1fr_auto] mob-land:grid-rows-[auto_1fr] mob-land:grid-cols-[1fr_auto] ">
            <h1 className="justify-self-center text-[clamp(2rem,5vw,2.5rem)] font-[600] row-span-1 mob-land:row-span-1 mob-land:col-span-2">
                Certification
            </h1>
            <div className="flex items-center flex-col justify-center h-full overflow-hidden row-span-1 mob-land:row-span-1 mob-land:col-span-1 mob-land:justify-self-center mobile:-mt-1">
                {certificateItems.map((item, index) => {
                    // 3. For each image, we determine its position relative to the center.
                    let position = "hide"; // Default to hidden
                    if (isMobile) {
                        // Vertical carousel logic
                        const top1Index =
                            (centerIndex + imageCount - 1) % imageCount;
                        const top2Index =
                            (centerIndex + imageCount - 2) % imageCount;
                        const bottom1Index = (centerIndex + 1) % imageCount;
                        const bottom2Index = (centerIndex + 2) % imageCount;

                        if (index === centerIndex) position = "center";
                        else if (index === top1Index) position = "top1";
                        else if (index === top2Index) position = "top2";
                        else if (index === bottom1Index) position = "bottom1";
                        else if (index === bottom2Index) position = "bottom2";
                    } else {
                        // Horizontal carousel logic (your original code)
                        const left1Index =
                            (centerIndex + imageCount - 1) % imageCount;
                        const left2Index =
                            (centerIndex + imageCount - 2) % imageCount;
                        const right1Index = (centerIndex + 1) % imageCount;
                        const right2Index = (centerIndex + 2) % imageCount;

                        if (index === centerIndex) position = "center";
                        else if (index === right1Index) position = "right1";
                        else if (index === right2Index) position = "right";
                        else if (index === left1Index) position = "left1";
                        else if (index === left2Index) position = "left";
                    }
                    // Any image whose index doesn't match one of these 5 slots remains "hide".

                    return (
                        <motion.div
                            key={item.id}
                            initial="hide"
                            animate={position}
                            variants={cardVariants}
                            transition={{ duration: 0.5 }}
                            style={{
                                width: isMobile ? "65%" : "43%",
                                position: "absolute",
                            }}
                            className="flex flex-col items-center justify-center"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-[12px] mob-land:h-[8rem] w-auto"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: position === "center" ? 1 : 0,
                                    // y: position === "center" ? 10 : 0,
                                }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="text-[1rem] mt-0 text-center text-[clamp(0.7rem,2vw,1rem)] text-[nowrap]"
                            >
                                {item.title}
                            </motion.p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Change this line */}
            {/* <div className="flex justify-center gap-30 mb-5 mob-land:grid-col-start-2 mob-land:col-end-3 mob-land:row-start-2 mob-land:row-end-3 mob-land:flex-col mob-land:gap-98 mob-land:-mx-5"> */}
            <div className="flex justify-center gap-30 mb-5 mob-land:grid-col-start-2 mob-land:col-end-3 mob-land:row-start-2 mob-land:row-end-3 mob-land:flex-col mob-land:gap-98 mob-land:-ml-11">
                <ButttonPrev
                    text={isMobile ? "Prev" : "Backward"}
                    onClick={handleBack}
                    classNameWidth={isMobile ? "w-[5rem]" : "w-[7rem]"}
                    className="mob-land:rotate-90"
                />
                <Buttton
                    text={isMobile ? "Next" : "Forward"}
                    onClick={handleNext}
                    classNameWidth={isMobile ? "w-[5rem]" : "w-[7rem]"}
                    className="mob-land:rotate-90"
                />

                {/* <button
                    className={`bg-indigo-400 rounded-md ${
                        isMobile ? "py-0 px-0" : "py-2 px-4"
                    }`}
                    onClick={handleBack}
                >
                    {isMobile ? "↑" : "Back"}
                </button>
                <button
                    className="bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    {isMobile ? "↓" : "Next"}
                </button> */}
            </div>
        </div>
    );
};

export default Certification;
