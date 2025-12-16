import { motion } from "motion/react";
// import styles from "./../../styles/responsive.scss";
import clsx from "clsx";

function ButttonPrev({
    text,
    className,
    classNameWidth,
    id,
    link,
    variants,
    buttonColor,
    onClick,
}) {
    const inlineStyle = buttonColor ? { backgroundColor: buttonColor } : {};

    return (
        <motion.a
            variants={variants}
            className={`${className ?? ""} cta-wrapper`}
            href={link}
            onClick={onClick}
        >
            <div className={clsx("cta-buttonPrev group", classNameWidth)}>
                <div className="bg-circlePrev" style={inlineStyle} />

                <div className="arrow-wrapperPrev">
                    <img
                        src="/images1/arrow-right1.svg"
                        alt="arrow"
                        className="w-5 object-cover img animate-bounce-x"
                    />
                </div>
                <p className="textPrev text-responsive-sm font-[600] ml-5">
                    {text}
                </p>
            </div>
        </motion.a>
    );
}

export default ButttonPrev;
