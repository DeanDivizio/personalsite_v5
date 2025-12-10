"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("s3");
    const [transitionTarget, setTransitionTarget] = useState("none");

    return (
        <ThemeContext.Provider value={{ theme, setTheme, transitionTarget, setTransitionTarget }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}