import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
// 1. Define the shape of your context
interface ThemeContextType {
  theme: string;
  handleTheme: () => void;
}

// 2. Initialize with the correct type (or null)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const UseContext = ({children}:{children: ReactNode}) => {
  const [isDark, setIsDark] = useState(false);

  function handleTheme(){
    setIsDark(!isDark);
  }

  const theme = isDark ? "dark" : "light";


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return (
    // You must provide the "value" prop here
    <ThemeContext.Provider value={{theme, handleTheme}}> 
      {children}
    </ThemeContext.Provider>
  )
};


export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within UseContext");
  }

  return context;
};

export default UseContext;