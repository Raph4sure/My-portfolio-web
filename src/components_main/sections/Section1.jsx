import { section } from "framer-motion/client";

const skills = [
    { text: "Software Engineer", imgPath: "/images1/Link.png" },
    { text: "Software Developer", imgPath: "/images1/Icon.png" },
    { text: "Data Scientist", imgPath: "/images1/Link.png" },
    { text: "Data Analyst", imgPath: "/images1/Icon.png" },
    { text: "Software Engineer", imgPath: "/images1/Link.png" },
    { text: "Software Developer", imgPath: "/images1/Icon.png" },
    { text: "Data Scientist", imgPath: "/images1/Link.png" },
    { text: "Data Analyst", imgPath: "/images1/Icon.png" },
];

function Section1() {
    return (
        <section className="relative overflow-hidden grid grid-cols-2 grid-rows-1 place-items-center mt-30 w-full tablet:grid-cols-1 grid-rows-2">
            <header className="">
                <div className="flex flex-col gap-7">
                    <div>
                        <h1>Hi there 👏,</h1>
                        <h1>I'm Alabi Raphael,</h1>
                        <span className="flex gap-2 items-center">
                            <span> i am a</span>
                            <span className="slide">
                                <span className="wrapper">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill.text}
                                            className=" pl-2 flex place-center gap-2 "
                                        >
                                            <img
                                                src={skill.imgPath}
                                                alt={skill.text}
                                                className="size-6 p-0.5 rounded-full bg-white-50"
                                            />
                                            <span>{skill.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </header>
            <header>
                <div>
               <img/>
                </div>
            </header>
        </section>
        // <section id="hero" className="relative overflow-hidden">
        //     <div className="absolute top-0 left-0 z-10">
        //         <img />
        //     </div>
        //     <div className="hero-layout">
        //         {/* Left side */}
        //         <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        //             <div className="flex flex-col gap-7"></div>
        //             <div className="header-text">
        //                 <h1>
        //                     Shaping <span className="slide">
        //                         <span className="wrapper">
        //                             {skills.map((skill) => (
        //                                 <span
        //                                     key={skill.text}
        //                                     className=" flex items-center md:gap-3 gap-1 pb-2"
        //                                 >
        //                                     <img
        //                                         src={skill.imgPath}
        //                                         alt={skill.text}
        //                                         className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
        //                                     />
        //                                     <span>{skill.text}</span>
        //                                 </span>
        //                             ))}
        //                         </span>
        //                     </span>
        //                 </h1>
        //                 <h1>Shaping</h1>
        //                 <h1>Shaping</h1>
        //             </div>
        //         </header>
        //         {/* Right side */}
        //     </div>
        // </section>
    );
}

export default Section1;
