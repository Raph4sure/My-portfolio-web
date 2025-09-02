import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import Section1 from "./components_main/sections/Section1";
import Test2 from "./Test2";
import NavBar from "./components_main/sections/NavBar";
import LogoSection from "./components_main/sections/LogoSection";
import Services from "./components_main/sections/services/Services";
import Portfolio from "./components_main/sections/Portfolio";
import Certification from "./components_main/sections/Certification";
import Tools from "./components_main/sections/Tools";

function App() {
    return (
        // <ThemeProvider>
        //     <div className="container">
        //         <section >
        //             {/* <div className="z-50">
        //             <Header />
        //             <ThemeSwitch />
        //         </div> */}
        //             {/* <Test1 /> */}
        //             <NavBar />
        //             <div>
        //                 <Section1 />
        //             </div>
        //         </section>
        //         <section>
        //             <LogoSection />
        //         </section>
        //         {/* <section > */}
        //         <Portfolio />
        //         {/* </section> */}
        //         <section>
        //             <Certification />
        //         </section>
        //         <section>
        //             <Services />
        //         </section>
        //     </div>
        // </ThemeProvider>

        // <section>
        //     <Certification />
        // </section>
        <section>
            <Tools />
        </section>
    );
}

export default App;
