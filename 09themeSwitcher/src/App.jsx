import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";

function App() {
    const [themeMode, setThemeMode] = useState("light");

    // Whenever there is value={{someName}} in here, then just create a method with someName and things will work out.
    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    // actual change in theme - using JS// this has nothing to do with context
    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeBtn */}
                    </div>

                    <div className="w-full max-w-sm mx-auto">{/* Card */}</div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
