import Header from "../../components/header/Header";
import {navItems} from "../../components/header/nav/Nav"
import ThemeSwitch from "../../components/ThemeSwitch";
// import Buttton from "../reUsable/Buttton";

function NavBar() {
    return (
        <header className="text-[1rem] w-full py-3 ">
            <div className="flex justify-between w-full px-4 items-center">
                <a
                    href="#section1"
                    className="font-playwrite font-[700] text-text-primary tablet:text-[0.8rem] phone:text-[0.4rem] hover:cursor-pointer hover:text-blue-50"
                >
                    Raph Web
                </a>
                <nav className="hidden lg:flex">
                    <ul className="flex gap-x-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="">
                                <a
                                    href={item.href}
                                    className="underline-animation text-text-primary"
                                >
                                    <span>{item.title}</span>
                                    <span className="" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeSwitch />
                <Header />

                <div className="w-35 h-full -mr-8 laptop:hidden ">
                    <a
                        href="/contact"
                        className="bg-white-50 text-black-50  rounded-tl-[0rem]  rounded-tr-[2rem]  rounded-bl-[2rem]  rounded-br-[0rem] px-3 hover:cursor-pointer hover:bg-blue-50"
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </header>
    );
}

export default NavBar
