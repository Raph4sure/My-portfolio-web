import Header from "./components/header/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import Test1 from "./Test1";

function App() {
    return (
        <ThemeProvider>
            <div>
                <Header />
                <ThemeSwitch />
                <Test1 />
            </div>
        </ThemeProvider>
    );
}

export default App;
