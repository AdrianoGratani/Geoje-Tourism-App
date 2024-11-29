import React from 'react';

import {useState, useEffect, createContext, useContext} from 'react';

const screenContext = createContext();

export const ScreenContextProvider = ({ children }) => {

    const [currentScreenWidthContext, setCurrentScreenWidthContext] = useState(window.innerWidth);

    useEffect(()=> {
        function handleScreenWidthToContext() {
            setCurrentScreenWidthContext(window.innerWidth);

            window.addEventListener('resize', handleScreenWidthToContext);

            return ()=> window.removeEventListener('resize', handleScreenWidthToContext);
        }
    }, []);

    return (
        <screenContext.Provider value={currentScreenWidthContext}>
            {children}
        </ screenContext.Provider>
    )
}

export const useScreenContext = () => useContext(screenContext);