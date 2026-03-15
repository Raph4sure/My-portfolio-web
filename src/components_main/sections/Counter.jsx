import CountUp from "react-countup";
import GlowCard from "../reUsable/GlowCard";

const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 34, suffix: "+", label: "Completed Projects" },
    {value: 29, suffix: '+', label: 'Satisfied Clients'},
];

function Counter() {
    return (
        <div className="w-full -mt-5 flex flex-col gap-[-2rem] text-text-primary">
            {counterItems.map((item, index) => (
                <div key={index} className="w-full">
                    <GlowCard className="m-5 phone:m-2 font-[600]">
                        <CountUp
                            suffix={item.suffix}
                            end={item.value}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={false}
                            scrollSpyDelay={100}
                        />
                        <p>{item.label}</p>
                    </GlowCard>
                </div>
            ))}
        </div>
    );
}


export default Counter;
