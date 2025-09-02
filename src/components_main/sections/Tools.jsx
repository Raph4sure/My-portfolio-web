import React from "react";
import styles from "./tools.module.scss";

// --- Data for our carousel ---
// Add or remove images here to change the carousel
const carouselItems = [
    { id: 1, src: "/tools/5.jpeg", alt: "girl1" },
    { id: 2, src: "/tools/6.jpeg", alt: "girl2" },
    { id: 3, src: "/tools/7.jpeg", alt: "girl3" },
    { id: 4, src: "/tools/8.jpeg", alt: "girl4" },
    { id: 5, src: "/tools/9.jpeg", alt: "girl5" },
    { id: 6, src: "/tools/9.jpeg", alt: "girl6" },
    { id: 7, src: "/tools/5.jpeg", alt: "girl7" },
    { id: 8, src: "/tools/6.jpeg", alt: "girl8" },
    { id: 9, src: "/tools/7.jpeg", alt: "girl9" },
    { id: 10, src: "/tools/7.jpeg", alt: "girl9" },
    { id: 11, src: "/tools/7.jpeg", alt: "girl9" },
    { id: 12, src: "/tools/7.jpeg", alt: "girl9" },
    { id: 13, src: "/tools/7.jpeg", alt: "girl9" },
];

const ImageCarousel = () => {
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
                    {carouselItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.item}
                            // Set the --position CSS variable for each item
                            style={{ "--position": item.id }}
                        >
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>
                <div className={styles.content}>
                    <h1 data-content="CSS ONLY">CSS ONLY</h1>
                    <div className={styles.author}>
                        <h2>LUN DEV</h2>
                        <p>
                            <b>Web Design</b>
                        </p>
                        <p>
                            Subscribe to the channel to watch many interesting
                            videos
                        </p>
                    </div>
                    <div className={styles.model}></div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
