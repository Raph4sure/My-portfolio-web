import { useState } from "react";
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

const Certification = () => {
    const imageCount = certificateItems.length;

    // 1. Our state is now just a single number: the index of the image in the center.
    const [centerIndex, setCenterIndex] = useState(0);

    // 2. The button handlers are now much simpler.
    const handleNext = () => {
        setCenterIndex((prevIndex) => (prevIndex + 1) % imageCount);
    };

    const handleBack = () => {
        setCenterIndex(
            (prevIndex) => (prevIndex + imageCount - 1) % imageCount
        );
    };

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3, opacity: 1 },
        left: { x: "-90%", scale: 0.5, zIndex: 2, opacity: 1 },
        right: { x: "90%", scale: 0.5, zIndex: 1, opacity: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3, opacity: 1 },
        hide: { scale: 0, opacity: 0, zIndex: 0 },
    };

    return (
        <div className="flex items-center flex-col justify-center bg-black h-screen overflow-hidden">
            {certificateItems.map((item, index) => {
                // 3. For each image, we determine its position relative to the center.
                let position = "hide"; // Default to hidden

                const left1Index = (centerIndex + imageCount - 1) % imageCount;
                const left2Index = (centerIndex + imageCount - 2) % imageCount;
                const right1Index = (centerIndex + 1) % imageCount;
                const right2Index = (centerIndex + 2) % imageCount;

                if (index === centerIndex) {
                    position = "center";
                } else if (index === right1Index) {
                    position = "right1";
                } else if (index === right2Index) {
                    position = "right";
                } else if (index === left1Index) {
                    position = "left1";
                } else if (index === left2Index) {
                    position = "left";
                }
                // Any image whose index doesn't match one of these 5 slots remains "hide".

                return (
                    
                    <motion.img
                        key={item.id}
                        src={item.img}
                        alt={item.title}
                        className="rounded-[12px]"
                        initial="hide" // Start all images hidden to prevent initial flash
                        animate={position}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ width: "43%", position: "absolute" }}
                    />
                );
            })}
            <div className="flex flex-row gap-3 z-10">
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Certification;
