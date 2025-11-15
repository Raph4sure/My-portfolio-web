"use client";
import React, { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import LinkItem from "./link/Link";
import Curve from "./curve/Curve";
import Footer from "./footer/Footer";

export const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Nav() {
    const [selectedIndicator, setSelectedIndicator] = useState(
        typeof window !== "undefined" ? window.location.pathname : "/"
    );

    useEffect(() => {
        const handlePop = () => setSelectedIndicator(window.location.pathname);
        window.addEventListener("popstate", handlePop);
        return () => window.removeEventListener("popstate", handlePop);
    }, []);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={`${styles.menu} invisible tab-land:visible`}
        >
            <div className={styles.body}>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(window.location.pathname);
                    }}
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => {
                        return (
                            <LinkItem
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            ></LinkItem>
                        );
                    })}
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    );
}
