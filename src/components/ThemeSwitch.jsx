import React from "react";
import { useTheme } from "../context/ThemeContext";
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";

function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed top-3 right-[20%]  cursor-pointer tablet:right-[17%] laptop:right-[2%] ">
            <div onClick={toggleTheme}>
                {theme === "light" ? (
                    <img src={dayMode} alt="day mode" className="w-15 h-auto" />
                ) : (
                    <img
                        src={nightMode}
                        alt="night mode"
                        className="w-15 h-auto"
                    />
                )}
            </div>
        </div>
    );
}

export default ThemeSwitch;
