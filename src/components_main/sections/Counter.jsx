import React from "react";
import CountUp from "react-countup";
import GlowCard from "../reUsable/GlowCard";

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 54, suffix: "+", label: "Completed Projects" },
    // {value: 29, suffix: '+', label: 'Satisfied Clients'},
    // { value: 98, suffix: "%", label: "Cumulative Clients Rating" },
];

function Counter() {
    return (
        <div className="w-full -mt-5 flex flex-row gap-[-2rem] text-[1.99rem] desktop:flex-col laptop:text-[1.5rem]  phone:text-[0.6rem] text-text-primary bg-red-600">
            {counterItems.map((item, index) => (
                // <div className="w-full flex flex-col">
                <div key={index} className="w-full">
                    {/* {item.value} */}
                    {/* {item.suffix} */}
                    <GlowCard className="m-5 phone:m-2">
                        <CountUp
                            suffix={item.suffix}
                            end={item.value}
                            duration={3}
                        />
                        <p>{item.label}</p>
                    </GlowCard>
                    {/* </div> */}
                </div>
            ))}
        </div>
    );
}

export default Counter;
