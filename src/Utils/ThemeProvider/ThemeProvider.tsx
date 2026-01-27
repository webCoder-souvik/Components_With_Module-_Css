// theme/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

type ColorScheme = "blue" | "green" | "red" | "purple";
type Mode = "light" | "dark";

interface ThemeContextType {
  mode: Mode;
  scheme: ColorScheme;
  setMode: (mode: Mode) => void;
  setScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("light");
  const [scheme, setScheme] = useState<ColorScheme>("blue");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.setAttribute("data-scheme", scheme);
  }, [mode, scheme]);

  return (
    <ThemeContext.Provider value={{ mode, scheme, setMode, setScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};

// Use this hook in your components to access the theme context
//   const { mode, setMode, scheme, setScheme } = useTheme();
