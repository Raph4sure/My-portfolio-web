import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import Section1 from "./components_main/sections/Section1";
import Test2 from "./Test2";
import NavBar from "./components_main/sections/NavBar";
import LogoSection from "./components_main/sections/LogoSection";
import Contact from "./components_main/sections/Contact";
import Portfolio from "./components_main/sections/Portfolio";
import Certification from "./components_main/sections/Certification";
import Tools from "./components_main/sections/Tools";
import Review from "./components_main/sections/Review";
import Counter from "./components_main/sections/Counter";
import Test1 from "./Test1";
import About from "./components_main/sections/About";
import ResponsiveDemo from "./components/ResponsiveDemo";
import ResponsiveTest from "./components_main/sections/ResponsiveTest";

function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <section className="bg-p">
                    <div className="z-50 bg-green-400">
                        {/* <Header /> */}
                        {/* <ThemeSwitch /> */}
                    </div>
                    {/* <Test1 /> */}
                    {/* <Test2 /> */}
                    <NavBar className="bg-brown-400" />

                    <div>
                        <Section1 />
                    </div>
                </section>
                {/* <section>
                    { <ResponsiveDemo/> }
                    <ResponsiveTest/>
                </section> */}

                {/* <section className="bg-yellow-400">
                    <LogoSection />
                </section> */}
                <section>
                    <Portfolio />
                </section>
                {/* <section>
                    <Certification />
                </section>
                <section className="">
                    <Tools />
                </section>
                <section>
                    <Contact/>
                </section>
                <section>
                    <About />
                </section> */}
            </div>
        </ThemeProvider>

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
