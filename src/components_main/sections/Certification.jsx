import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificateItems = [
    {
        id: 1,
        img: "/images2/img1.png",
        title: "Certificate of Web Development",
    },
    { id: 2, img: "/images2/img2.png", title: "Advanced React Course" },
    { id: 3, img: "/images2/img3.png", title: "Framer Motion Certificate" },
    { id: 4, img: "/images2/img4.png", title: "Node.js Essentials" },
    { id: 5, img: "/images2/img5.png", title: "Database Management" },
    { id: 6, img: "/images2/img6.png", title: "UI/UX Fundamentals" },
    { id: 7, img: "/images2/img6.png", title: "UI/UX Fundamentals" },
    { id: 8, img: "/images2/img6.png", title: "UI/UX Fundamentals" },
    { id: 9, img: "/images2/img6.png", title: "UI/UX Fundamentals" },
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
    center: { y: "0%", x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    top1: { y: "-60%", x: "0%", scale: 0.7, zIndex: 3, opacity: 1 },
    top2: { y: "-120%", x: "0%", scale: 0.5, zIndex: 2, opacity: 1 },
    bottom1: { y: "60%", x: "0%", scale: 0.7, zIndex: 3, opacity: 1 },
    bottom2: { y: "120%", x: "0%", scale: 0.5, zIndex: 2, opacity: 1 },
    hide: { y: "0%", x: "0%", scale: 0, opacity: 0, zIndex: 0 },
};

const Certification = () => {
    const imageCount = certificateItems.length;

    // 1. Our state is now just a single number: the index of the image in the center.
    const [centerIndex, setCenterIndex] = useState(0);

    // Get live window width
    const width = useWindowWidth();
    const isMobile = width < 768; // Standard tablet breakpoint

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
        <div className="w- full h-full grid grid-rows-[auto_1fr]">
            <h1 className="justify-self-center text-5xl">Certification</h1>
            <div className="flex items-center flex-col justify-center -mt-10 overflow-hidden">
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
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-[12px]"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: position === "center" ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="text-[1rem] mt-0 text-center"
                            >
                                {item.title}
                            </motion.p>
                        </motion.div>
                    );
                })}
                <div
                    className={`z-10 flex gap-4 ${
                        isMobile
                            ? "flex-col mr-4 relative left-20 gap-60"
                            : "flex-row relative top-45"
                    }`}
                >
                    <button
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
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Certification;
