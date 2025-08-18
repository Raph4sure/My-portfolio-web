import React from "react";
import { motion } from "framer-motion";
import styles from "./curve.module.scss";

export default function Curve() {
    const h = typeof window !== "undefined" ? window.innerHeight : 0;
    const initialPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${
        h / 2
    } 100 0`;
    const targetPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;

    const curve = {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
    };

    return (
        <svg className={styles.svgCurve}>
            <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
            ></motion.path>
        </svg>
    );
}
