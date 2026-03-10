import { motion } from "motion/react";
// import styles from "./../../styles/responsive.scss";
import clsx from "clsx";

function Buttton({ text, className, id, link, variants, buttonColor, onClick, classNameWidth }) {
    const inlineStyle = buttonColor ? { backgroundColor: buttonColor } : {};

    return (
        <motion.a
            variants={variants}
            className={`${className ?? ""} cta-wrapper`}
            href={link}
            onClick={onClick}
        >
             <div className={clsx("cta-button group", classNameWidth)}>
                <div className="bg-circle" style={inlineStyle} />
                <p className="text text-responsive-sm font-[600] -ml-5">
                    {text}
                </p>
                <div className="arrow-wrapper">
                    <img
                        src="/images1/arrow-right1.svg"
                        alt="arrow"
                        className="w-[1.3rem] object-cover img animate-bounce-x"
                    />
                </div>
            </div>
        </motion.a>
    );
}

export default Buttton;
