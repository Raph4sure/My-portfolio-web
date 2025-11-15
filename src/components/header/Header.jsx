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
                <div className={`${styles.header} invisible tab-land:visible`}>
                    {/* <div className="fixed right-0 top-0 p-[30px] z-10"> */}
                    <div
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        className={`${styles.button} bg-blue-500`}
                        // className="bg-red-900"
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
