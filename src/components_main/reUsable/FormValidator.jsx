import React from "react";
import styles from "./../sections/contact.module.scss";

const ValidatedInput = ({
    id,
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    error,
    isSuccess,
    className, // Accept a custom className prop
    onBlur, // Accept onBlur prop
    ...props
}) => {
    const isTextarea = type === "textarea";

    // Combine the default input class with any custom class passed in
    const inputClassName = `${styles.form__input} ${
        isSuccess ? styles["form__input--success"] : ""
    } ${error ? styles["form__input--error"] : ""} ${
        isTextarea ? styles.textarea : ""
    } ${className || ""}`; // Apply custom className here

    const InputComponent = isTextarea ? "textarea" : "input";

    // The 'type' prop is only valid on <input> elements.
    // We also pass down other props like 'rows'.
    const inputProps = { ...props };
    if (InputComponent === "input") {
        inputProps.type = type;
    }

    // The group class no longer needs the custom className
    const groupClassName = styles.form__group;

    return (
        <div className={groupClassName}>
            {/* 1. The input/textarea now comes BEFORE the label in the HTML */}
            <InputComponent
                id={id}
                name={id}
                className={inputClassName}
                placeholder={placeholder || " "} // A space placeholder is key for the animation
                value={value}
                onChange={onChange}
                onBlur={onBlur} // Pass onBlur to the input component
                {...inputProps} // Use the cleaned props
            />
            {/* 2. The label is now positioned absolutely relative to the group */}
            <label className={styles.form__label} htmlFor={id}>
                {label}
            </label>

            {/* 3. The icons are now inside their own container for better positioning */}
            <div className={styles.iconContainer}>
                <span
                    className={`${styles["error-icon"]} ${
                        !error && styles.hidden
                    }`}
                >
                    <i className="fa-solid fa-circle-exclamation"></i>
                </span>
                <span
                    className={`${styles["success-icon"]} ${
                        !isSuccess && styles.hidden
                    }`}
                >
                    <i className="fa-solid fa-circle-check"></i>
                </span>
            </div>

            {/* The error message div is always rendered to prevent layout shift */}
            <div className={styles.error}>
                {error || "\u00A0"}
                {/* Use a non-breaking space to maintain height */}
            </div>
        </div>
    );
};

export default ValidatedInput;
