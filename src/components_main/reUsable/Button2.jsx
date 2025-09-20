import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./button2.module.scss";


const Button2 = ({ to, children, ...props }) => {
  
    return (
        <NavLink to={to} className={styles.button} {...props}>
            {children}
        </NavLink>
    );
};

export default Button2;
