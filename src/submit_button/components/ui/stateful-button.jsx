import React, { useState } from "react";
import { motion, useAnimate } from "motion/react";
import { cn } from "../../lib/utils";

export const Button2 = ({ className, children, ...props }) => {
    const [status, setStatus] = useState("idle");
    const [scope, animate] = useAnimate();

    const animateLoading = async () => {
        await animate(
            ".loader",
            {
                width: "20px",
                scale: 1,
                display: "block",
            },
            {
                duration: 0.2,
            }
        );
    };

    const animateSuccess = async () => {
        await animate(
            ".loader",
            {
                width: "0px",
                scale: 0,
                display: "none",
            },
            {
                duration: 0.2,
            }
        );
        await animate(
            ".check",
            {
                width: "20px",
                scale: 1,
                display: "block",
            },
            {
                duration: 0.2,
            }
        );
    };

    const animateError = async () => {
        await animate(
            ".loader",
            {
                width: "0px",
                scale: 0,
                display: "none",
            },
            {
                duration: 0.2,
            }
        );
        await animate(
            ".x-icon",
            {
                width: "20px",
                scale: 1,
                display: "block",
            },
            {
                duration: 0.2,
            }
        );
    };

    const resetAnimation = async () => {
        await animate(
            ".check",
            {
                width: "0px",
                scale: 0,
                display: "none",
            },
            {
                duration: 0.2,
            }
        );
        await animate(
            ".x-icon",
            {
                width: "0px",
                scale: 0,
                display: "none",
            },
            {
                duration: 0.2,
            }
        );
    };

    const handleClick = async (event) => {
        if (status === "loading") return;

        setStatus("loading");
        await resetAnimation();
        animateLoading();

        try {
            await props.onClick?.(event);
            setStatus("success");
            await animateSuccess();
            setTimeout(() => {
                resetAnimation();
                setStatus("idle");
            }, 2000);
        } catch (error) {
            setStatus("error");
            await animateError();
            setTimeout(() => {
                resetAnimation();
                setStatus("idle");
            }, 2000);
        }
    };

    const {
        onClick,
        onDrag,
        onDragStart,
        onDragEnd,
        onAnimationStart,
        onAnimationEnd,
        ...buttonProps
    } = props;

    return (
        <motion.button
            layout
            layoutId="button"
            ref={scope}
            className={cn(
                "flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-tl-3xl rounded-br-3xl px-4 py-1 font-medium text-white ring-offset-2 transition-colors duration-200 hover:ring-2 dark:ring-offset-black",
                status === "idle" && "bg-blue-500 hover:ring-blue-500",
                status === "loading" && "bg-blue-500 hover:ring-blue-500",
                status === "success" && "bg-green-500 hover:ring-green-500",
                status === "error" && "bg-red-500 hover:ring-red-500",
                className
            )}
            {...buttonProps}
            onClick={handleClick}
        >
            <motion.div layout className="flex items-center gap-2">
                <Loader />
                <CheckIcon />
                <XIcon />
                <motion.span layout key="label">
                    {status === "idle" && children}
                    {status === "loading" && "Sending message..."}
                    {status === "success" && "Sent"}
                    {status === "error" && "Sending failed"}
                </motion.span>
            </motion.div>
        </motion.button>
    );
};

const Loader = () => {
    return (
        <motion.svg
            animate={{
                rotate: [0, 360],
            }}
            initial={{
                scale: 0,
                width: 0,
                display: "none",
            }}
            style={{
                scale: 0.5,
                display: "none",
            }}
            transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "linear",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader text-white"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
    );
};

const CheckIcon = () => {
    return (
        <motion.svg
            initial={{
                scale: 0,
                width: 0,
                display: "none",
            }}
            style={{
                scale: 0.5,
                display: "none",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="check text-white"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
        </motion.svg>
    );
};

const XIcon = () => {
    return (
        <motion.svg
            initial={{
                scale: 0,
                width: 0,
                display: "none",
            }}
            style={{
                scale: 0.5,
                display: "none",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="x-icon text-white"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
