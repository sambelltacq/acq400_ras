import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const ContextTest = ({ children }) => {
    const [globalVar, setGlobalVar] = useState('default value');

    return (
        <GlobalContext.Provider value={{ globalVar, setGlobalVar }}>
            {children}
        </GlobalContext.Provider>
    );
};