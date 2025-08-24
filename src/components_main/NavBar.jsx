import {navItems} from "../components/header/nav/Nav"
import Buttton from "./reUsable/Buttton";

function NavBar() {
    return (
        <header className="text-[1rem] w-full tablet:hidden mt-4">
            <div className="flex justify-between w-full px-4 items-center">
                <a href="#section1" className="font-playwrite font-[400]">
                    Raph Web
                </a>
                <nav className="">
                    <ul className="flex gap-x-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="">
                                <a
                                    href={item.href}
                                    className="underline-animation"
                                >
                                    <span>{item.title}</span>
                                    <span className="" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="w-35 h-full -mr-8">
                    <a href="/contact" className="bg-white-50 text-black-50  rounded-tl-[0rem]  rounded-tr-[2rem]  rounded-bl-[2rem]  rounded-br-[0rem] px-3 hover:cursor-pointer hover:bg-blue-50">
                        Contact me
                    </a>
                </div>
            </div>
        </header>
    );
}

export default NavBar
