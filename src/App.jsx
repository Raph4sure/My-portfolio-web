import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import Test1 from "./Test1";

function App() {
    return (
        <div>
            <Header />
            <ThemeProvider>
                <ThemeSwitch />
            </ThemeProvider>
            <Test1 />
        </div>
    );
}

export default App;
