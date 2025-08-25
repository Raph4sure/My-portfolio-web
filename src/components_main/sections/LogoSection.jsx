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
        <div className="flex gap-x-2 items-center marquee-item">
            <img src={icon.imagePath} alt={icon.name ?? "logo"} />
            <p className="text-sm">{icon.name}</p>
        </div>
    );
};

function LogoSection() {
    return (
        <div className="relative">
            {/* Edge fade handled by CSS mask on .marquee; keep these if you plan custom edges */}
            <h1 className="font-playwrite -mb-9 mt-9 text-center text-lg">My work Experience</h1>
            <div className="marquee h-52">
                <div className="marquee-track md:gap-12 gap-5">
                    {/* Start label */}
                    <div className="marquee-item flex items-center">
                        {/* <span className="text-sm font-semibold">
                            Work Experience
                        </span> */}
                    </div>
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
    );
}

export default LogoSection;
