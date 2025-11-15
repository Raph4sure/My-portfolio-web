import React from "react";
import { useTheme } from "../context/ThemeContext";
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";

function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="cursor-pointer ">
            <div onClick={toggleTheme}>
                {theme === "light" ? (
                    <img
                        src={dayMode}
                        alt="day mode"
                        className="w-5 h-auto tab-land:w-[1rem]"
                    />
                ) : (
                    <img
                        src={nightMode}
                        alt="night mode"
                        className="w-5 h-auto tab-land:w-[1rem]"
                    />
                )}
            </div>
        </div>
    );
}

export default ThemeSwitch;