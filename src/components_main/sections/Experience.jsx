import Button2 from "../reUsable/Button2";
import Counter from "./Counter";

const logoIconList = [
    {
        imagePath: "/images1/upwork.svg",
        name: "Upwork",
    },
    {
        imagePath: "/images1/sm.png",
        name: "SkoolMedia Nig Ltd",
    },
    {
        imagePath: "/images1/freelancer.svg",
        name: "Freelancer",
    },
    {
        imagePath: "/images1/fiverr.svg",
        name: "Fiverr",
    },
    {
        imagePath: "/images1/taskrabbit.svg",
        name: "TaskRabbit",
    },
];

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex shrink-0 gap-x-2 items-center marquee-item">
            <img
                src={icon.imagePath}
                alt={icon.name ?? "logo"}
                className="phone:w-3"
            />
            <p className="text-sm phone:text-[0.5rem] whitespace-nowrap">
                {icon.name}
            </p>
        </div>
    );
};

function Experience() {
    return (
        <main className="h-full phone:text-sm mt-2">
            <h1
                data-content="My work Experience"
                className="text-center headers !text-[clamp(1.5rem,100%,3rem)]"
            >
                {/* <h1 className="font-playwrite -mb-13 text-center text-lg phone:text-[0.6rem] headers"> */}
                My work Experience
            </h1>
            <div className="relative alignleft h-28">
                {/* Edge fade handled by CSS mask on .marquee; keep these if you plan custom edges */}
                <div className="marquee">
                    <div className="marquee-track md:gap-12 gap-5 md:pr-12 pr-5">
                        {logoIconList.map((icon, index) => (
                            <LogoIcon icon={icon} key={`logo-a-${index}`} />
                        ))}
                        {/* Repeat label for seamless loop */}
                        {/* <div className="marquee-item flex items-center">
                        <span className="text-sm font-semibold font-playwrite">
                            My Working Experience
                        </span>
                    </div> */}
                        {logoIconList.map((icon, index) => (
                            <LogoIcon icon={icon} key={`logo-b-${index}`} />
                        ))}
                    </div>
                </div>
            </div>
            <Counter />
        </main>
    );
}

export default Experience;
