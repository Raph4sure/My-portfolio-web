import React from "react";
import styles from "./tools.module.scss";

// --- Data for our carousel ---
// Add or remove images here to change the carousel
const carouselItems = [
    { id: 1, name:'React', src: "/tools/5.jpeg", alt: "girl1" },
    { id: 2, name:'JavaScript', src: "/tools/6.jpeg", alt: "girl2" },
    { id: 3, name:'CSS', src: "/tools/7.jpeg", alt: "girl3" },
    { id: 4, name:'HTML', src: "/tools/8.jpeg", alt: "girl4" },
    { id: 5, name:'Node.js', src: "/tools/9.jpeg", alt: "girl5" },
    { id: 6, name:'Express', src: "/tools/9.jpeg", alt: "girl6" },
    { id: 7, name:'MongoDB', src: "/tools/5.jpeg", alt: "girl7" },
    { id: 8, name:'Git', src: "/tools/6.jpeg", alt: "girl8" },
    { id: 9, name:'GitHub', src: "/tools/7.jpeg", alt: "girl9" },
    { id: 10, name:'Figma', src: "/tools/7.jpeg", alt: "girl9" },
    { id: 11, name:'Photoshop', src: "/tools/7.jpeg", alt: "girl9" },
    { id: 12, name:'Illustrator', src: "/tools/7.jpeg", alt: "girl9" },
    { id: 13, name:'InDesign', src: "/tools/7.jpeg", alt: "girl9" },
];

const Tools = () => {
    // Dynamically get the number of items for our CSS variable
    const itemCount = carouselItems.length;

    return (
        // A wrapper to hold the body background styles from the original CSS
        <div className={styles.sceneContainer}>
            <div className={styles.banner}>
                <div
                    className={styles.slider}
                    // Set the --quantity CSS variable dynamically
                    style={{ "--quantity": itemCount }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className={styles.item}
                            // Set the --position CSS variable for each item
                            style={{ "--position": index }}
                        >
                            <img src={item.src} alt={item.alt} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.content}>
                    {/* <h1 data-content="My Tech Stacks">My Tech Stacks</h1> */}
                    <div className={styles.author}>
                        <h2>
                            RAPH <span>WEB</span>
                        </h2>
                        {/* <p>
                            <b>Web Design</b>
                        </p> */}
                        <p>My frequently used Stacks and Tools</p>
                    </div>
                    <div className={styles.model}></div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
