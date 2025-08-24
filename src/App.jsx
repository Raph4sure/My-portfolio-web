import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import Section1 from "./components_main/sections/Section1";
import Test1 from "./Test1";
import NavBar from "./components_main/NavBar";

function App() {
    return (
        <ThemeProvider>
            <section className="">
                {/* <div className="z-50">
                    <Header />
                    <ThemeSwitch />
                </div> */}
                {/* <Test1 /> */}
                <NavBar/>
                <div>
                <Section1 />
                </div>
            </section>
        </ThemeProvider>
    );
}

export default App;
