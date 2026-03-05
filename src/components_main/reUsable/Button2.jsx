import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./button2.module.scss";
import clsx from "clsx";

const Button2 = ({ to, href, children, className, buttonColor, ...props }) => {
    const inlineStyle = buttonColor
        ? { "--button-dynamic-color": buttonColor }
        : {};

    if (href) {
        return (
            <a
                href={href}
                className={clsx(styles.buttons, className)}
                style={inlineStyle}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <NavLink
            to={to}
            className={clsx(styles.buttons, className)}
            style={inlineStyle}
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default Button2;
