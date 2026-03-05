import clsx from "clsx";


const NavigateHome = ({className}) => {
    return (
            <div className={clsx("absolute z-50 bg-black-100/5 rounded-full flex items-center justify-center w-7 h-7 hover:bg-black-100/20 ", className)}>
                <a
                    href="#"
                    className="cursor-pointer text-black-100 hover:text-blue-500"
                >
                    <img
                        src="/images1/arrow-right1.svg"
                        alt="arrow"
                        className="w-5 object-cover img animate-bounce-x -rotate-90 mb-1"
                    />
                </a>
            </div>
    );
}

export default NavigateHome
