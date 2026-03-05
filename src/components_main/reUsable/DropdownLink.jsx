import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Button } from "@heroui/button";

const DropdownLink = ({child, child1, child2, href1, href2}) => {
    return (
        <a className="underline-animation text-text-primary">
            <Popover placement="bottom" showArrow={true} offset={20}>
                <PopoverTrigger>
                    <Button className="p-0 min-w-0 h-auto bg-transparent text-text-primary text-[1rem] font-[600] hover:text-black-100/60">
                        {child}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div className="text-small font-[600] flex flex-col text-black-100">
                            <a
                                href={href1}
                                className="text-black-100 underline-animation text-text-primary mb-3 hover:text-black-100/60 cursor-pointer"
                            >
                                {child1}
                            </a>
                            <a
                                href={href2}
                                className="text-black-100 underline-animation text-text-primary hover:text-black-100/60 cursor-pointer"
                            >
                                {child2}
                            </a>
                        </div>

                        {/* <div className="text-tiny">This is the popover content</div> */}
                    </div>
                </PopoverContent>
            </Popover>
        </a>
    );
};

export default DropdownLink;

// import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
// import { Button } from "@heroui/button";

// export default function Test1() {
//     return (
//         <a className="underline-animation text-text-primary">
//             <Popover placement="bottom" showArrow={true}>
//                 <PopoverTrigger>
//                     <Button className="p-0 min-w-0 h-auto bg-transparent text-text-primary text-[1rem]">
//                         Skills
//                     </Button>
//                 </PopoverTrigger>
//                 <PopoverContent>
//                     <div className="px-1 py-2">
//                         <div className="text-small font-bold flex flex-col text-black-100">
//                             <a className="text-black-100 underline-animation text-text-primary">
//                                 About
//                             </a>
//                             <a className="text-black-100 underline-animation text-text-primary">
//                                 About
//                             </a>
//                         </div>

//                         {/* <div className="text-tiny">This is the popover content</div> */}
//                     </div>
//                 </PopoverContent>
//             </Popover>
//         </a>
//     );
// }
