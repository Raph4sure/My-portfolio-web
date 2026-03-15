import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import Experience from "./components_main/sections/Experience";
import Contact from "./components_main/sections/Contact";
import Projects from "./components_main/sections/Projects";
import Certification from "./components_main/sections/Certification";
import TechStacks from "./components_main/sections/TechStacks";
import Home from "./components_main/sections/Home";
import About from "./components_main/sections/About";
import NavBar from "./components_main/sections/NavBar";
function App() {
    return (
        <HeroUIProvider>
            <ThemeProvider>
                <div className="container">
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

                           
                                </>
                            }
                        />
                    </Routes>
                </div>
            </ThemeProvider>
        </HeroUIProvider>

   
    );
}

export default App;
