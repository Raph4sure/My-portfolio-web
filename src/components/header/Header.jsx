import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const onPopState = () => {
            if (isActive) setIsActive(false);
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, [isActive]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        className={styles.button}
                    >
                        <div
                            className={`${styles.burger} ${
                                isActive ? styles.burgerActive : ""
                            }`}
                        ></div>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
    );
}
