import React, { useRef } from "react";
import styles from "./glowCard.module.scss";

// This is a reusable wrapper component.
// It accepts a 'className' prop to allow for additional styling,
// and 'children' to render any content inside the card.
const GlowCard = ({ children, className }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${mouseX}px`);
        card.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    return (
        <div
            className={`${styles.card} ${className || ""}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.cardContent}>{children}</div>
        </div>
    );
};

export default GlowCard;
