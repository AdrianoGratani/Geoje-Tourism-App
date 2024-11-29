import React from 'react';

import {useState, useEffect, createContext, useContext} from 'react';

const screenContext = createContext();

export const ScreenContextProvider = ({ children }) => {

    const [currentScreenWidthContext, setCurrentScreenWidthContext] = useState(window.innerWidth);
    const [screenMode, setScreenMode] = useState('');

    const es = () => { // the function to evaluate the isze of the screen:
        if(currentScreenWidthContext <600) {setScreenMode('mobile')}
        else if(currentScreenWidthContext <1000) {setScreenMode('tablet')}
        else if(currentScreenWidthContext <1900) {setScreenMode('desktop')}
        else {setScreenMode('large')}
    }

    useEffect(() => {
        es();
    }, [currentScreenWidthContext]);

    useEffect(()=> {
        function handleScreenWidthToContext() {
            setCurrentScreenWidthContext(window.innerWidth);
        }
        window.addEventListener('resize', handleScreenWidthToContext);
        return ()=> window.removeEventListener('resize', handleScreenWidthToContext);
    }, []);

    return (
        <screenContext.Provider value={{
            currentScreenWidthContext,
            screenMode,
            es,
            }}>
            {children}
        </ screenContext.Provider>
    )
}

export const useScreenContext = () => useContext(screenContext);