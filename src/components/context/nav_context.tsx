import React, { createContext, useState, ReactNode } from "react";

// Define types for the context state
export interface NavbarContextType {
    navbar: boolean;
    setNavbar: (navbar: boolean) => void;
}

// Create the context with a default value of undefined
export const NavBarContext = createContext<NavbarContextType | undefined>(undefined);


// Create the provider component
const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [navbar, setNavbar] = useState(false); 
    // this state controls when the navbar would open or close.

    const value = { navbar, setNavbar };

    return <NavBarContext.Provider value={value}>{children}</NavBarContext.Provider>;
};

export default NavbarProvider
