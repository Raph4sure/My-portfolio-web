import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import Section1 from "./components_main/sections/Section1";
import Test2 from "./Test2";
import NavBar from "./components_main/sections/NavBar";
import LogoSection from "./components_main/sections/LogoSection";

function App() {
    return (
        <ThemeProvider>
            <section className="sectioning">
                {/* <div className="z-50">
                    <Header />
                    <ThemeSwitch />
                </div> */}
                {/* <Test1 /> */}
                <NavBar />
                <div>
                    <Section1 />
                </div>
                <LogoSection />
            </section>
        </ThemeProvider>
    );
}

export default App;
