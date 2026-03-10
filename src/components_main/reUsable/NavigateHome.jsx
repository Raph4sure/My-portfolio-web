import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";


const NavigateHome = ({className}) => {
    const { theme } = useTheme();
    return (
        <div
            className={clsx(
                "absolute z-50 bg-[var(--color-nav-icon)] rounded-full flex items-center justify-center w-7 h-7 hover:bg-[var(--color-nav-icon-hover)] tab-land:hidden",
                className
            )}
        >
            <a
                href="#"
                className="cursor-pointer text-black-100 hover:text-blue-500"
            >
                {theme === "light" ? (
                    <img
                        src="/images1/arrow-right2.svg"
                        alt="arrow"
                        className="w-5 object-cover img animate-bounce-x -rotate-90 mb-1"
                    />
                ) : (
                    <img
                        src="/images1/arrow-right1.svg"
                        alt="arrow"
                        className="w-5 object-cover img animate-bounce-x -rotate-90 mb-1"
                    />
                )}
            </a>
        </div>
    );
}

export default NavigateHome
