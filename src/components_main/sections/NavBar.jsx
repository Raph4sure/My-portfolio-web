import Header from "../../components/header/Header";
import ThemeSwitch from "../../components/ThemeSwitch";
import Button2 from "../reUsable/Button2";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import DropdownLink from "../reUsable/DropdownLink";
import { useTheme } from "../../context/ThemeContext";



function NavBar() {
    const { theme } = useTheme();

    return (
        <header className="text-[1rem] w-full py-1">
            <div className="flex justify-between w-full px-2 items-center">
           

                {theme === "light" ? (
                    <a href="#">
                        <img
                            src="/tools/main1_logo.png"
                            alt="Logo"
                            className="h-6 w-object-fit hover:cursor-pointer hover:opacity-70 text-blue-700"
                        />
                    </a>
                ) : (
                    <a href="#">
                        <img
                            src="/tools/main1_logo_dark.png"
                            alt="Logo"
                            className="h-6 w-object-fit hover:cursor-pointer hover:opacity-70 text-blue-700"
                        />
                    </a>
                )}

                <nav className="flex tab-land:hidden font-[600]">
                    <ul className="flex gap-x-4">
                   
                        <li className="">
                            <a
                                href="#"
                                className="underline-animation text-text-primary hover:text-[var(--color-text-hover)]"
                            >
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <DropdownLink
                                child="Work"
                                child1="Experience"
                                child2="Projects"
                                href1="#experience"
                                href2="#projects"
                            />
                        </li>
                        <li>
                            <DropdownLink
                                child="Skills"
                                child1="Certification"
                                child2="Tech Stacks"
                                href1="#certification"
                                href2="#tech-stacks"
                            />
                        </li>
                        <li className="">
                            <a
                                href="#about"
                                className="underline-animation text-text-primary hover:text-[var(--color-text-hover)]"
                            >
                                <span>About</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <ThemeSwitch />
                <Header />

                <div className="w-35 h-full -mr-4 flex tab-land:hidden">
                    <Button2
                        href="#contact"
                        textColor="var(--color-text-button)"
                        buttonColor="var(--color-button)"
                    >
                        Contact me
                    </Button2>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
