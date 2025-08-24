import { motion } from "motion/react";

function Buttton({ text, className, id, link, variants }) {
    return (
        <motion.a
            variants={variants}
            className={`${className ?? ""} cta-wrapper`}
            href={link}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text -ml-6 my-[-5%] laptop:my-[-3%] tablet:pl-[-0%]">
                    {text}
                </p>
                <div className="arrow-wrapper">
                    <img
                        src="/images1/arrow-right1.svg"
                        alt="arrow"
                        className="w-6 object-cover img animate-bounce-x ml-2 laptop:w-5"
                    />
                </div>
            </div>
        </motion.a>
    );
}

export default Buttton;
