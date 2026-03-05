import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import Test2 from "./Test2";
import Experience from "./components_main/sections/Experience";
import Contact from "./components_main/sections/Contact";
import Projects from "./components_main/sections/Projects";
import Certification from "./components_main/sections/Certification";
import TechStacks from "./components_main/sections/TechStacks";
import Review from "./components_main/sections/Review";
import Counter from "./components_main/sections/Counter";
import Test1 from "./components_main/reUsable/DropdownLink";
import ResponsiveDemo from "./components/ResponsiveDemo";
import ResponsiveTest from "./components_main/sections/ResponsiveTest";
import Home from "./components_main/sections/Home";
import About from "./components_main/sections/About";
import NavBar from "./components_main/sections/NavBar";
// import { lazy, Suspense } from "react";
// const About = lazy(() => import("./components_main/sections/About"));
// const NavBar = lazy(() => import("./components_main/sections/NavBar"));
// const Section1 = lazy(() => import("./components_main/sections/Section1"));

import SpinnerTriangle from "./components_main/reUsable/SpinnerTriangle";

function App() {
    return (
        <HeroUIProvider>
            <ThemeProvider>
                <div className="container">
                    {/* <Suspense fallback={<SpinnerTriangle />}> */}
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <section id="#">
                                        <div className="sub_section">
                                            <NavBar />

                                            <div>
                                                <Home />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="experience">
                                        <div className="sub_section">
                                            <Experience />
                                        </div>
                                    </section>

                                    <section id="projects">
                                        <div className="sub_section">
                                            <Projects />
                                        </div>
                                    </section>
                                    
                                    <section id="certification">
                                        <div className="sub_section">
                                            <Certification />
                                        </div>
                                    </section>

                                    <section id="tech-stacks">
                                        <div className="sub_section">
                                            <TechStacks />
                                        </div>
                                    </section>

                                    <section id="contact">
                                        <div className="sub_section">
                                            <Contact />
                                        </div>
                                    </section>

                                    <section id="about">
                                        <div className="sub_section">
                                            <About />
                                        </div>
                                    </section>

                                    {/* <section>
                                        <div className="sub_section">
                                            <SpinnerTriangle />
                                        </div>
                                    </section> */}
                                </>
                            }
                        />
                    </Routes>
                    {/* </Suspense> */}
                </div>
            </ThemeProvider>
        </HeroUIProvider>

        // <section>
        //     <Certification />
        // </section>
        // <section>
        //     <Tools />
        // </section>

        // <section>
        //     <Review/>
        // </section>
        // <section>
        //     <Counter/>
        // </section>
        // <section className="">
        //     <LogoSection />
        //     {/* <Test1/> */}
        // </section>
    );
}

export default App;
