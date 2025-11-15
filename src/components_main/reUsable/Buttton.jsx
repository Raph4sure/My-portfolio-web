import { motion } from "motion/react";
// import styles from "./../../styles/responsive.scss";


function Buttton({ text, className, id, link, variants }) {
    return (
        <motion.a
            variants={variants}
            className={`${className ?? ""} cta-wrapper`}
            href={link}
        >
            <div className="cta-button group w-[7rem]">
                <div className="bg-circle"/>
                <p className='text text-responsive-sm font-[500] -ml-5'>
                    {text}
                </p>
                <div className="arrow-wrapper">
                    <img
                        src="/images1/arrow-right1.svg"
                        alt="arrow"
                        className="w-5 object-cover img animate-bounce-x pr-1"
                    />
                </div>
            </div>
        </motion.a>
    );
}

export default Buttton;
